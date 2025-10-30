import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from './Confirmation';
import { MemoryRouter } from 'react-router-dom';

test('Confirmation page renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Confirmation />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
