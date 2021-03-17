import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import WineTasting from './WineTasting';

test('WineTasting page renders correctly', () => {
  const {getByText, getByPlaceholderText, getByLabelText} = render(<WineTasting/>);
  getByLabelText('New Wine Tasting')
  getByText('start tasting');
  getByPlaceholderText('Type in name of winery ...')
})

test('Allows user to enter inputs and move to next page', () => {
  const { getByText, getByPlaceholderText, getByLabelText } = render(<WineTasting />);

  const inputWineName = getByLabelText('New Wine Tasting');
  fireEvent.change(inputWineName, {target:{value: 'New Wine input'}})

  // input year
  const inputYear = getByPlaceholderText('Type in year ...');
  fireEvent.change(inputYear, {target:{value: 2001}})

  // input dropdown wine 
  
  
  fireEvent.click(getByText('start tasting')); 


})