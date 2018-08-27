import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';

let main;
const props = {
  lowercase: false,
  uppercase: false,
  symbol: false,
  number: false,
  length: false,
  valid: false
};

beforeEach(() => {
  // Render the AccountNumber in the document
  main = shallow(<App />);
});

afterEach(() => {
  main.unmount();
  main = null;
});

test('Main renders', () => {
  expect(true).toBe(true);
});
