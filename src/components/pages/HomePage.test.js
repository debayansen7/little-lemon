import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';

test('HomePage renders main sections', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );
    // Heading contains title text (at least one occurrence)
    const matches = screen.getAllByText(/Little Lemon/i);
    expect(matches.length).toBeGreaterThan(0);
});
