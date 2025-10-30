import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';
import { MemoryRouter } from 'react-router-dom';

test('Heading shows site title', () => {
    render(
        <MemoryRouter>
            <Heading />
        </MemoryRouter>
    );
    expect(screen.getByText(/Little Lemon/i)).toBeDefined();
});
