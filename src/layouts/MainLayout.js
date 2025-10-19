import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
const MainLayout = () => {
    return (_jsxs("div", { children: [_jsx("div", { children: _jsx(Navbar, {}) }), _jsx("div", { className: 'min-h-screen', children: _jsx(Outlet, {}) }), _jsx("div", { children: _jsx("h1", { children: "Footer" }) })] }));
};
export default MainLayout;
