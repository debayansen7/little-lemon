import React from 'react';
import { render } from '@testing-library/react';
import Specials from './Specials';
import { MemoryRouter } from 'react-router-dom';

test('Specials component renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Specials />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
