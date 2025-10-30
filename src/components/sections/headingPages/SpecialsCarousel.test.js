import React from 'react';
import { render } from '@testing-library/react';
import SpecialsCarousel from './SpecialsCarousel';
import { MemoryRouter } from 'react-router-dom';

test('SpecialsCarousel renders', () => {
    const { container } = render(
        <MemoryRouter>
            <SpecialsCarousel />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
