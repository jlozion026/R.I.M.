import { render, cleanup, screen, getAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthContextProvider } from "@/setup/context-manager/authContext";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ITestCreateAcc, ITestInput } from './models';

import CreateAccount from "./index";




function typeInto({ email, designation }: ITestInput): any {
  const emailInputElement = screen.getByLabelText("Email");
  const passwordInputElement = screen.getByLabelText("Designation");
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (designation) {
    userEvent.type(passwordInputElement, designation);
  }
  return ({ emailInputElement, passwordInputElement });
}

function inputCredentials({ email, designation }: ITestCreateAcc) {
  typeInto({ email: email });
  typeInto({ designation: designation });
}

const queryClient = new QueryClient();

describe('render the component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const mockOnClick = jest.fn();
    const popUp = jest.fn();
    const results = render(
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <CreateAccount popUp={popUp} setMenuTrig={mockOnClick} />
        </QueryClientProvider>
      </AuthContextProvider>
    );
    container = results.container;
  })

  afterEach(cleanup);


  test('if component rendered', () => {
    const dropdownCont = screen.getByTestId("createAccForm");

    expect(dropdownCont).toBeInTheDocument();

  })

  describe('email inputfield', () => {
    test('check if email textbox rendered', () => {
      const emailInputElement = screen.getByLabelText("Email");
      expect(emailInputElement).toBeInTheDocument();
    })

    test('should be able to type in textbox', () => {
      const { emailInputElement } = typeInto({ email: "test@mail.com" });
      expect(emailInputElement).toHaveValue("test@mail.com");
    })

    describe('field validation', () => {
      test('should show required message on invalid email', () => {
        typeInto({ email: ".com" });
        const errDiv = screen.getByTestId("email-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("*Required");
      })

      test('should not show required message on valid email', () => {
        typeInto({ email: "test@mail.com" });
        const errDiv = screen.getByTestId("email-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("");
      })
    })
  });

  describe("designation inputfield", () => {
    test('check if password textbox rendered', () => {
      const passwordInputElement = screen.getByLabelText("Designation")
      expect(passwordInputElement).toBeInTheDocument();
    })

    test('should be able to type in textbox', () => {
      const { passwordInputElement } = typeInto({ designation: "balingasa" });
      expect(passwordInputElement).toHaveValue("balingasa");
    })

    describe('field validation', () => {
      test('should show required message on not filled up password field', () => {
        const errDiv = screen.getByTestId("desig-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("*Required");

      })

      test('should not show required message on filled up field', () => {
        typeInto({ designation: "testpass123" });
        const errDiv = screen.getByTestId("desig-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("");
      })

    })

  })

  describe("Radiobutton", () => {
    test('check if 2 radiobutton rendered', () => {

      const radioButtons = getAllByRole(container, 'radio');

      expect(radioButtons.length).toBe(2);
    })

    test('radiobutton value should  be normal', () => {
      const radioButtons = getAllByRole(container, 'radio');
      const normalRadio = radioButtons[0]
      const adminRadio = radioButtons[1]

      userEvent.click(normalRadio);
      expect(normalRadio).toBeChecked();
      expect(adminRadio).not.toBeChecked();

      //expect(getRadioVal).toHaveBeenCalledWith('NORMAL');
    })

    test('radiobutton value should  be admin', () => {
      const radioButtons = getAllByRole(container, 'radio');
      const normalRadio = radioButtons[0]
      const adminRadio = radioButtons[1]

      userEvent.click(adminRadio);
      expect(normalRadio).not.toBeChecked();
      expect(adminRadio).toBeChecked();

      //expect(getRadioVal).toHaveBeenCalledWith('NORMAL');
    })

  })


  describe('button', () => {
    test('check if button rendered', () => {
      const btnElement = screen.getByRole('button');
      expect(btnElement).toBeInTheDocument();
    })
    test('button should not be disabled when input exists', () => {
      inputCredentials({ email: 'test25@mail.com', designation: 'balingasa' });

      const radioButtons = getAllByRole(container, 'radio');
      const normalRadio = radioButtons[0]
      userEvent.click(normalRadio);

      const btnElement = screen.getByRole('button');
      expect(btnElement).not.toBeDisabled();
    })

    describe('button shoud be disabled when', () => {
      test('all input does not exists', () => {
        inputCredentials({ email: '', designation: '' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('email input only exists', () => {
        inputCredentials({ email: 'test@mail.com', designation: '' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('designation input only exists', () => {
        inputCredentials({ email: '', designation: 'testpass123' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('radiobutton input only exists', () => {
        inputCredentials({ email: '', designation: '' });

        const radioButtons = getAllByRole(container, 'radio');
        const normalRadio = radioButtons[0]
        userEvent.click(normalRadio);

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('radiobutton and email input only exists', () => {
        inputCredentials({ email: 'test@mail.com', designation: '' });

        const radioButtons = getAllByRole(container, 'radio');
        const normalRadio = radioButtons[0]
        userEvent.click(normalRadio);

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('radiobutton and designation input only exists', () => {
        inputCredentials({ email: '', designation: 'balingasa' });

        const radioButtons = getAllByRole(container, 'radio');
        const normalRadio = radioButtons[0]
        userEvent.click(normalRadio);

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

    })


    //  describe('form validation', () => {
    //    test('should show error message on invalid credential', async () => {
    //      inputCredentials({ email: 'test@mail.com', password: 'pass123' });
    //      clickLoginBtn()

    //      await waitFor(() => {
    //        const errMsg = screen.getByText("Invalid Credentials");
    //        expect(errMsg).toBeInTheDocument();
    //      })
    //    });

    //    test('should not show error message on valid credentials', async () => {
    //      inputCredentials({ email: 'test1@mail.com', password: 'testpass123' });
    //      clickLoginBtn()

    //      await waitFor(() => {
    //        const errDiv = screen.getByTestId("email-error");
    //        const divTxt = errDiv.textContent
    //        expect(divTxt).toBe("");
    //      })
    //    });

  })

})
