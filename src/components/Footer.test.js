import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

test('Footer renders', () => {
    const { container } = render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
    expect(container.firstChild).toBeDefined();
});
