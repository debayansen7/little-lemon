import React from 'react';
import { render, screen } from '@testing-library/react';
import SpecialCard from './SpecialCard';
import { MemoryRouter } from 'react-router-dom';

test('SpecialCard renders props', () => {
    render(
        <MemoryRouter>
            <SpecialCard
                image={'/dummy.png'}
                name={'Pizza'}
                price={'$10'}
                description={'Tasty'}
            />
        </MemoryRouter>
    );
    expect(screen.getByText(/Pizza/i)).toBeDefined();
    expect(screen.getByText(/\$10/i)).toBeDefined();
});
