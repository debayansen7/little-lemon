const React = require('react');

const Link = ({ children, to, ...rest }) => React.createElement('a', { href: to, ...rest }, children);
const NavLink = Link;
const MemoryRouter = ({ children }) => React.createElement(React.Fragment, null, children);
const BrowserRouter = MemoryRouter;
const Routes = ({ children }) => React.createElement(React.Fragment, null, children);
const Route = ({ element }) => element || null;
const useNavigate = () => () => { };
const useParams = () => ({});
const useLocation = () => ({ pathname: '/' });

module.exports = {
    Link,
    NavLink,
    MemoryRouter,
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
};
