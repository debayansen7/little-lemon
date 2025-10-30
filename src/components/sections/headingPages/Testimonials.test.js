import React from 'react';
import { render } from '@testing-library/react';
import Testimonials from './Testimonials';
import { MemoryRouter } from 'react-router-dom';

test('Testimonials renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Testimonials />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
