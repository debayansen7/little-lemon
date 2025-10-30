import React from 'react';
import { render } from '@testing-library/react';
import Routing from './Routing';
import { MemoryRouter } from 'react-router-dom';

test('Routing renders without crashing', () => {
    const { container } = render(
        <MemoryRouter>
            <Routing />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
