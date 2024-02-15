import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button/Button';

// tests that the children elements have been rendered correctly
test ('renders Button component with children', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
});

// tests that the onClick function has been called correctly and the correct number of times
test ('calls onClick when button is clicked', () => {
    const onClickTest = jest.fn();
    render(<Button onClick={onClickTest}>Click me</Button>);
    
    fireEvent.click(screen.getByText(/Click me/i));
  
    expect(onClickTest).toHaveBeenCalledTimes(1);
})