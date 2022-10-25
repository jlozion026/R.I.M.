import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignIn from './';
import { credentials } from './models';

interface ceredentials {
  email?: string;
  password?: string;
}

function typeInto({ email, password }: ceredentials): any {
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

describe('render the component', () => {

  beforeEach(() => {
    render(<SignIn />);
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
        typeInto({ email: "testmail.com" });
        const requiredTxt = screen.queryByText("*Required");
        expect(requiredTxt).toBeInTheDocument();
      })

      test('should not show required message on valid email', async () => {
        typeInto({ email: "test@mail.com" });
        await waitFor(() => {
          expect(screen.queryByText("*Required")).not.toBeInTheDocument();
        })
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
        const requiredTxt = screen.queryByText("*Required");
        expect(requiredTxt).toBeInTheDocument();
      })

      test('should not show required message on not filled up field', async () => {
        typeInto({ password: "testpass123" });
        await waitFor(() => {
          expect(screen.queryByText("*Required")).not.toBeInTheDocument();
        })
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
    test('should show error message on invalid credential', async () => {
      const onSubmit = jest.fn();
      inputCredentials({ email: 'test@mail.com', password: 'testpass123' });
      clickLoginBtn()

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          email: 'test@mail.com',
          password: 'testpass123'
        })
      })

      expect(onSubmit).toHaveBeenCalledTimes(1);

      const errMsg = screen.getByText("invalid user credential");
      expect(errMsg).toBeInTheDocument();
    });

    test('should have correct credentials', async () => {
      const onSubmit = jest.fn();
      inputCredentials({ email: 'test@mail.com', password: 'testpass123' });
      clickLoginBtn()

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          email: 'test@mail.com',
          password: 'testpass123'
        })
      })

      expect(onSubmit).toHaveBeenCalledTimes(1);

      const errMsg = screen.getByText("invalid user credential");
      expect(errMsg).toBeInTheDocument();
    });
  })


})
