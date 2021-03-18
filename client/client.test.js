// const { render } = require("react-dom")
import '@testing-libary'
import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

// @ts-ignore
it('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
  test('false is falsy', () => {
    expect(false).toBe(false);
  })
})
test('loads items', async() => {
  render(<App />)
})


describe('Login', () => {
  render(<Login />)
  const placeholderText = screen.getByPlaceholderText("Type in your user name")
  expect(placeholderText).toBeInTheDocument();
})

// Test to see that logging in for the first time sends you to login page

// if logged in, go directly to home page

// if email is already in use, send error message? /

// if password is not strong enough, send message

// render page correctly