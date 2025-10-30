import React from 'react';
import { render } from '@testing-library/react';
import Order from './Order';
import { MemoryRouter } from 'react-router-dom';

test('Order page renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Order />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
