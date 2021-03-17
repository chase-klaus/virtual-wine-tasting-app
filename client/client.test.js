// const { render } = require("react-dom")
// import '@testing-libary'
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import {User} from './src/Components/User';
import Login from './src/Components/Login';
import Home from './src/Components/Home';
import {App} from './src/App';
// import {render, fireEvent, screen} from '@testing-library/react';

// @ts-ignore

it('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
  test('false is falsy', () => {
    expect(false).toBe(false);
  })
})

// describe('Home', () => {
//   render(<Home />)
//   const appText = screen.getByText("Why this app?")
//   expect(appText).toBeInTheDocument();
// })

describe('Login', () => {
  render(<Login />)
  const placeholderText = screen.getByPlaceholderText("Type in your user name")
  expect(placeholderText).toBeInTheDocument();
})

//

// clicking on tabs takes you to the correct page


// Test to see that logging in for the first time sends you to login page

// if logged in, go directly to home page --> to HOME page

// if email is already in use, send error message? --> 

// password strength and email validation 

// if password is not strong enough, send message

// render page correctly

// cant log in more than one user at once

// delete from list

// back button 

// edit tasting

// if youre signed out it sends you to login 