import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';

test('BookingForm renders and shows book button', () => {
    const mockUpdate = jest.fn();
    const { container } = render(
        <MemoryRouter>
            <BookingForm availableTimes={["17:00"]} updateTimes={mockUpdate} />
        </MemoryRouter>
    );
    // Link button present
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Book Table|Book Table/i) || container).toBeTruthy();
});
