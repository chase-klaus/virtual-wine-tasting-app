import {render, screen, fireEvent} from '@testing-library/react';
import Home from './Home';

describe('Home test', () => {
  test('renders Home component, check by text', () => {
    render(<Home/>); 
    const homeText = screen.getByText('Why this app?');
    expect(homeText).toBeInTheDocument()
  })
})