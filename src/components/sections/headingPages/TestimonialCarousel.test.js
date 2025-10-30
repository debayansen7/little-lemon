import React from 'react';
import { render } from '@testing-library/react';
import TestimonialCarousel from './TestimonialCarousel';
import { MemoryRouter } from 'react-router-dom';

test('TestimonialCarousel renders', () => {
    const { container } = render(
        <MemoryRouter>
            <TestimonialCarousel />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
