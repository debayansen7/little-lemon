import React from 'react';
import { render } from '@testing-library/react';
import BookingPage from './BookingPage';
import { MemoryRouter } from 'react-router-dom';

test('BookingPage renders without crashing', () => {
    const { container } = render(
        <MemoryRouter>
            <BookingPage />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
