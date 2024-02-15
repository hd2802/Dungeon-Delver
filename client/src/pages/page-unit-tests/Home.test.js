import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import '@testing-library/jest-dom';

test('renders Home component with correct text', () => {
  render(<Home />);

  const homeText = screen.getByText(/home page/i);

  expect(homeText).toBeInTheDocument();
});
