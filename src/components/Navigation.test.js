import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

test('Navigation renders for desktop without crashing', () => {
    const { container } = render(
        <MemoryRouter>
            <Navigation device="desktop" />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
