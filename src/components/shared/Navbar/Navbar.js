import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import menuItems from '../../../data/menuItems'; // assuming you have a menuItems data file
import Headroom from 'react-headroom';
import MyButton from '@/components/ui/core/MyButton/MyButton';
const Navbar = () => {
    const [, setIsScrolled] = useState(false);
    const [isNavOpened, setIsNavOpened] = useState(false);
    const location = useLocation();
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    };
    // Listen to scroll events
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (_jsx(Headroom, { children: _jsx("nav", { className: `flex justify-between items-center py-5 md:py-8 mx-auto z-[100] shadow-md bg-white`, children: _jsxs("div", { className: "w-[90%] md:w-[88%] mx-auto flex justify-between", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx(Link, { to: "/", className: "font-montserrat font-semibold text-primary", children: "Demo" }) }), _jsx("div", { "data-aos": "zoom-in", className: "md:pl-[48px] hidden lg:flex flex-grow items-center justify-center gap-12 font-questrial text-para text-[14px] font-normal", children: menuItems.map((menu, idx) => {
                            const isActive = location.pathname === menu.path;
                            return (_jsx(Link, { to: menu.path, className: `${isActive ? 'text-primary' : 'text-para'} hover:text-btn transition-all duration-300`, children: menu.name }, idx));
                        }) }), _jsx("div", { "data-aos": "zoom-in-right", className: "hidden lg:flex items-center gap-8", children: _jsx(Link, { to: "/auth/login", className: "text-para hover:text-btn transition-all duration-300", children: "Login" }) }), _jsx("div", { "data-aos": "zoom-in", className: "flex lg:hidden items-center gap-3 md:gap-8 font-questrial text-[14px] font-normal text-black", children: isNavOpened ? (_jsx(IoClose, { onClick: () => setIsNavOpened(!isNavOpened), size: 32 })) : (_jsx(IoMenu, { onClick: () => setIsNavOpened(!isNavOpened), size: 32 })) }), _jsx("div", { className: `fixed top-0 left-0 h-[calc(100vh+72px)] bg-white shadow-lg z-40 transform transition-all duration-500 ease-in-out ${isNavOpened
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0'}`, style: { width: '80%' }, children: _jsxs("div", { "data-aos": "zoom-in", className: "flex flex-col items-start gap-6 px-6 py-5", children: [_jsx("h2", { className: "text-xl text-primary font-semibold", children: "Demo" }), _jsx("div", { className: "mt-2 md:mt-8 flex flex-col gap-4", children: menuItems.map((menu, idx) => {
                                        const isActive = location.pathname === menu.path;
                                        return (_jsx(Link, { to: menu.path, onClick: () => setIsNavOpened(!isNavOpened), className: `${isActive ? 'border-b-2 border-primary' : ''} text-[16px] text-black`, children: menu.name }, idx));
                                    }) }), _jsx("div", { "data-aos": "zoom-in-right", className: "flex flex-col items-center justify-start gap-2", children: _jsx(Link, { to: "/login", className: "w-full", children: _jsx(MyButton, { label: "Login", fullWidth: true }) }) })] }) })] }) }) }));
};
export default Navbar;
