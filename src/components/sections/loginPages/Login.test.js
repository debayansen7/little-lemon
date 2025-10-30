import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

test('Login section renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
