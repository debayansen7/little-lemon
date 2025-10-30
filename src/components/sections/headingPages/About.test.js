import React from 'react';
import { render } from '@testing-library/react';
import About from './About';
import { MemoryRouter } from 'react-router-dom';

test('About section renders', () => {
    const { container } = render(
        <MemoryRouter>
            <About />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
