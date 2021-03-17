import { render, screen, fireEvent } from '@testing-library/react';
import User from './User';

const userLoggedIn = {
  userId: 4,
  mail: 'remy@gmail.com', 
  password:  'Remy123!'
}


describe('User page test', () => {
  test('renders User components', () => {
    render(<User user={userLoggedIn}/>);
    const UserText = screen.getByText('logged in as');
    expect(UserText).toBeInTheDocument()
  })

  test('renders User components with corresponding user info', () => {
    render(<User user={userLoggedIn}/>);
    const UserText = screen.getByText('logged in as');
    const userMail = userLoggedIn.mail;
    // const userMailText = screen.getByText('username');
    // const userMailText = screen.getByText(userLoggedIn.mail);
    // const userMailText = screen.getByText(`/${userLoggedIn.mail}/`);
    const userMailText = screen.getByText(/remy@gmail.com/);
    expect(UserText).toBeInTheDocument()
    expect(userMailText).toBeInTheDocument()
  })
})