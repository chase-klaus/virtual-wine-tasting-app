import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import Login from './Components/Login/Login'

describe('App test', () => {
  test('Will render login, if the user is not authenticated', () => {
    render(<App />);
    const AppText = screen.getByText('User Login');
    expect(AppText).toBeInTheDocument()
  })

  test('Will lead to the register screen if you click on register link ', () => {
    render(<App />);
    const signupButton = screen.getByText(/here/);
    fireEvent.click(signupButton);
    const RegisterText = screen.getByText('Register new User');
    expect(RegisterText).toBeInTheDocument()
  })
})