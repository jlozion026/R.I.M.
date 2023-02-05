import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthContextProvider } from "@/setup/context-manager/authContext";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { credentials, ITypeInto } from '../../models';

import SignInForm from "./index";


function typeInto({ email, password }: ITypeInto): any {
  const emailInputElement = screen.getByLabelText("EMAIL ADDRESS");
  const passwordInputElement = screen.getByLabelText("PASSWORD")
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  return ({ emailInputElement, passwordInputElement });
}

function inputCredentials({ email, password }: credentials) {
  typeInto({ email: email });
  typeInto({ password: password });
}

function clickLoginBtn() {
  const btnElement = screen.getByRole('button')
  userEvent.click(btnElement);

}

const queryClient = new QueryClient();

describe('render the component', () => {

  beforeEach(() => {
    render(
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <SignInForm />
        </QueryClientProvider>
      </AuthContextProvider>
    );
  })

  afterEach(cleanup);


  test('check if header rendered', () => {
    const headerElement = screen.getByText("LOGIN");
    expect(headerElement).toBeInTheDocument();
  })

  describe('email textbox', () => {
    test('check if email textbox rendered', () => {
      const emailInputElement = screen.getByLabelText("EMAIL ADDRESS");
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

  describe("password textbox", () => {
    test('check if password textbox rendered', () => {
      const passwordInputElement = screen.getByLabelText("PASSWORD")
      expect(passwordInputElement).toBeInTheDocument();
    })

    test('should be able to type in textbox', () => {
      const { passwordInputElement } = typeInto({ password: "testpass123" });
      expect(passwordInputElement).toHaveValue("testpass123");
    })

    describe('field validation', () => {
      test('should show required message on not filled up password field', () => {
        const errDiv = screen.getByTestId("password-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("*Required");

      })

      test('should not show required message on filled up field', () => {
        typeInto({ password: "testpass123" });
        const errDiv = screen.getByTestId("password-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("");
      })

    })

  })


  describe('check box', () => {
    test('check if checkbox rendered', () => {
      const checkboxElement = screen.getByRole('checkbox');
      expect(checkboxElement).toBeInTheDocument();
    })

    test('single click', () => {
      const checkboxElement = screen.getByRole('checkbox');
      userEvent.click(checkboxElement);
      expect(checkboxElement).toBeChecked();
    })

    test('dobule click', () => {
      const checkboxElement = screen.getByRole('checkbox');
      userEvent.dblClick(checkboxElement);
      expect(checkboxElement).not.toBeChecked();
    })
  })

  describe('button', () => {
    test('check if button rendered', () => {
      const btnElement = screen.getByRole('button');
      expect(btnElement).toBeInTheDocument();

    })
    test('button should not be disabled when input exists', () => {
      inputCredentials({ email: 'test@mail.com', password: 'testpass123' });

      const btnElement = screen.getByRole('button');
      expect(btnElement).not.toBeDisabled();

    })

    describe('button shoud be disabled when', () => {
      test('both input does not exists', () => {
        inputCredentials({ email: '', password: '' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('email input only exists', () => {
        inputCredentials({ email: 'test@mail.com', password: '' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

      test('password input only exists', () => {
        inputCredentials({ email: '', password: 'testpass123' });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      })

    })
  })

  describe('form validation', () => {
    test('should show error message on invalid credential', async () => {
      inputCredentials({ email: 'test@mail.com', password: 'pass123' });
      clickLoginBtn()

      await waitFor(() => {
        const errMsg = screen.getByText("Invalid Credentials");
        expect(errMsg).toBeInTheDocument();
      })
    });

    test('should not show error message on valid credentials', async () => {
      inputCredentials({ email: 'test1@mail.com', password: 'testpass123' });
      clickLoginBtn()

      await waitFor(() => {
        const errDiv = screen.getByTestId("email-error");
        const divTxt = errDiv.textContent
        expect(divTxt).toBe("");
      })
    });
  })
})
