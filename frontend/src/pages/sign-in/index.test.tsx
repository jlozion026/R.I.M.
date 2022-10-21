import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import SignIn from './';
 
interface ceredentials{
    email?: string;
    password?:string;
}
 
function typeInto({email, password}:ceredentials):any{
  const emailInputElement = screen.getByLabelText("EMAIL ADDRESS");
  const passwordInputElement = screen.getByLabelText("PASSWORD")
  if(email){
    userEvent.type(emailInputElement, email);
  }
  if(password){
    userEvent.type(passwordInputElement, password);
  }
  return({emailInputElement, passwordInputElement});
}
 
describe('render the component', () =>{

  beforeEach(() =>{
    render(<SignIn/>);
  })
 
  test('check if header rendered', () =>{
    const headerElement = screen.getByText("LOGIN");
    expect(headerElement).toBeInTheDocument();
  })
 
  describe('email textbox', () =>{
    test('check iyf email textbox rendered', () =>{
        const emailInputElement = screen.getByLabelText("EMAIL ADDRESS");
        expect(emailInputElement).toBeInTheDocument();
    })
    test('should be able to type in textbox', () =>{
        const {emailInputElement} = typeInto({email: "test@mail.com"});
        expect(emailInputElement).toHaveValue("test@mail.com");
    })
  });
 
  describe("password textbox", () =>{
    test('check if password textbox rendered', () =>{
        const passwordInputElement = screen.getByLabelText("PASSWORD")
        expect(passwordInputElement).toBeInTheDocument();
    })
    test('should be able to type in textbox', () =>{
      const {passwordInputElement} = typeInto({password: "testpass123"});
      expect(passwordInputElement).toHaveValue("testpass123");
    })
  })
 

  describe('check box', () =>{
      test('check if checkbox rendered', () =>{
          const checkboxElement = screen.getByRole('checkbox');
          expect(checkboxElement).toBeInTheDocument();
      })

      test('single click', ()=>{
        const checkboxElement = screen.getByRole('checkbox');
        userEvent.click(checkboxElement);
        expect(checkboxElement).toBeChecked();
    })
 
      test('dobule click', () =>{
          const checkboxElement = screen.getByRole('checkbox');
          userEvent.dblClick(checkboxElement);
          expect(checkboxElement).not.toBeChecked();
      })
  })
 
  test('check if button rendered', () =>{
    const btnElement = screen.getByRole('button'); 
    expect(btnElement).toBeInTheDocument();
  })
 
})