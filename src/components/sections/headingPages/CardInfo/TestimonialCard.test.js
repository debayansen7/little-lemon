import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

test('TestimonialCard displays name and description', () => {
    render(<TestimonialCard name="Alice" description="Great place" />);
    expect(screen.getByText(/Alice/i)).toBeDefined();
    expect(screen.getByText(/Great place/i)).toBeDefined();
});
