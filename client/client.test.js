// const { render } = require("react-dom")
import '@testing-libary'
import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

// @ts-ignore
it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

test('loads items', async() => {
  render(<App />)
})

// Test to see that logging in for the first time sends you to login page

// if logged in, go directly to home page

// if email is already in use, send error message? /

// if password is not strong enough, send message

// render page correctly