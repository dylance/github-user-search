import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const searchHeader = screen.getByText(/Search User's Github Repositories/i);
  expect(searchHeader).toBeInTheDocument();
});
