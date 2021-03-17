import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import Home from './Home';


describe('Home test', () => {
  test('renders Home component, check by text', () => {
    render(
      <Router>
        <Home/>
      </Router>
      ); 
    const homeText = screen.getByText('Why this app?');
    expect(homeText).toBeInTheDocument()
  })

  test('when you click on icon it renders proper page', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const startTasting = screen.getByTitle('startTasting');
    // const startTasting = screen.getByRole('link');
    userEvent.click(startTasting);
    const tastingText = screen.getByPlaceholderText('Type in name of winery')
    expect(tastingText).toBeInTheDocument();
  })
})
