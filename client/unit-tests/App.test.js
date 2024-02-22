import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders Home component when path is /', () => {
    render (
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
});