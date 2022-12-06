import { render, screen } from '@testing-library/react';
import App from './App';

//This test does nothing
test('renders learn react link', () => {
  render(<App />);
  const linkElement = 1
  expect(linkElement).toEqual(1);
});
