import { render, screen, fireEvent } from '@testing-library/react';
import OverallRating from './OverallRating';
// import Login from './Components/Login/Login'

describe('App test', () => {
  test('Will render login, if the user is not authenticated', () => {
    render(<OverallRating />);
    const AppText = screen.getByText('User Login');
    expect(AppText).toBeInTheDocument()
  })

})