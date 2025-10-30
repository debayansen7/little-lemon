import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';
import { MemoryRouter } from 'react-router-dom';

test('Reserve Heading renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Heading />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
