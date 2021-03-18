import { render, screen, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import WineTasting from './WineTasting';

test('WineTasting page renders correctly', () => {
  const {getByText, getByPlaceholderText, getByLabelText} = render(<WineTasting/>);
  getByLabelText('New Wine Tasting')
  getByText('start tasting');
  getByPlaceholderText('Type in name of winery ...')
})

test('Allows user to enter inputs and move to next page in testing', () => {
  const { getByText, getByPlaceholderText, getByLabelText } = render(<WineTasting />);

  const inputWineName = getByLabelText('New Wine Tasting');
  const inputYear = getByPlaceholderText('Type in year ...');
  const wineDropdown = screen.getByTestId('select');

  fireEvent.change(inputWineName, {target:{value: 'New Wine input'}})
  fireEvent.change(inputYear, {target:{value: 2001}})
  fireEvent.change(wineDropdown, {target:{value:'malbec'}})  
  fireEvent.click(getByText('start tasting')); 

  const nextScreen = screen.getByText('rate fruit/sweet character of the wine')
  expect(nextScreen).toBeInTheDocument();
})