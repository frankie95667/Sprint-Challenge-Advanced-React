import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('does render without crashing', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  }) 
});

it('does not include dark-mode class on default', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const app = document.querySelector('.App');
  expect(app.classList).not.toContain('dark-mode');  
});

it('includes dark-mode class when switch is pressed', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const app = document.querySelector('.App');
  const Switch = document.querySelector('input.MuiSwitch-input');
  fireEvent.click(Switch);
  expect(app.classList).toContain('dark-mode');  
})
