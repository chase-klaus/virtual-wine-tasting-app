import { render, screen, fireEvent } from '@testing-library/react';
import OverallRating from './OverallRating';
import { BrowserRouter as Router } from "react-router-dom";
// import Login from './Components/Login/Login'

describe('OverallRating test', () => {
  test('Render overall rating card correctly ', () => {
    render(
      <Router>
        <OverallRating />
      </Router>
    );
    const OverallRatingText = screen.getByText('overall rating of the wine');
    expect(OverallRatingText).toBeInTheDocument()
  })

})