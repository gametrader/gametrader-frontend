import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders welcome test', () => {
  render(<App />);
  const linkElement = screen.getByText(/HomePage/i);
  expect(linkElement).toBeInTheDocument();
});
