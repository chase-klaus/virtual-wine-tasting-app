import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// const userLoggedIn = {
//   loginUser: (
//     mail:'remy@gmail.com', 
//     password:'Remy123!', 
//     userId:4, 
//     validated:true) => void
// }


describe('Login test', () => {
  test('renders Login component correctly, check by text', () => {
    render(<Login />);
    const LoginText = screen.getByText('User Login');
    expect(LoginText).toBeInTheDocument()
  })

  test('Will lead to the register screen if you click on register link ', () => {
    render(<Login />);
    const signupButton = screen.getByText(/here/);
    fireEvent.click(signupButton);
    const RegisterText = screen.getByText('Register new User');
    expect(RegisterText).toBeInTheDocument()
  })

  // test('Will render success page if user is registered correctly after pressing register button', () => {
  //   const registerSubmitButton = screen.getByText(/register/); 
  //   fireEvent.click(registerSubmitButton);
  //   const successMessage = screen.getByText('User successfully registered'); 
  //   expect(successMessage).toBeInTheDocument();
  // })


})