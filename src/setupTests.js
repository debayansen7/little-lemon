// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

// Provide a lightweight mock of react-router-dom for the test environment.
// This avoids resolver/ESM issues with some router versions and keeps tests focused on rendering.
jest.mock('react-router-dom', () => {
    const React = require('react');
    return {
        MemoryRouter: ({ children }) => React.createElement('div', null, children),
        BrowserRouter: ({ children }) => React.createElement('div', null, children),
        Link: ({ children, to, ...rest }) => React.createElement('a', { href: to, ...rest }, children),
        NavLink: ({ children, to, ...rest }) => React.createElement('a', { href: to, ...rest }, children),
        Routes: ({ children }) => React.createElement('div', null, children),
        Route: ({ element }) => element || null,
        useNavigate: () => () => { },
        useParams: () => ({}),
        useLocation: () => ({ pathname: '/' }),
    };
});
