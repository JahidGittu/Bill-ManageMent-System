import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';

const Navbar = ({ balance }) => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/bills', label: 'Bills' },
        { path: '/profile', label: 'Profile' },
    ];

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="w-11/12 mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <img className="w-10" src="https://i.ibb.co/4wXBgWLk/PayBill.png" alt="PayBill Logo" />
                    <span className="font-bold text-xl text-blue-600">Bill System</span>
                </NavLink>

                {/* Nav Menu */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:text-blue-500'
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* User Auth + Dropdown */}
                <div className="flex items-center space-x-4 relative">
                    {user && user.email ? (
                        <>
                            {/* Email and Logout (visible on md+) */}
                            <span className="hidden md:inline-block text-sm text-gray-700">
                                {user.displayName || user.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="btn btn-primary text-white px-4 py-1.5 rounded text-sm hidden md:inline-block"
                            >
                                Logout
                            </button>

                            {/* Dropdown Menu using Headless UI */}
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="flex items-center focus:outline-none">
                                        <span>
                                            {
                                                user.photoURL
                                                    ? <img src={user.photoURL} alt="profile" className="w-12 h-12 rounded-full" />
                                                    : <FaUserCircle className="text-3xl text-blue-600 cursor-pointer" />
                                            }

                                        </span>
                                    </MenuButton>
                                </div>

                                <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white border border-gray-200 shadow-lg focus:outline-none z-50">
                                    <div className="px-4 py-3 border-b border-gray-400">
                                        <p className="text-sm text-gray-700">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                                    </div>

                                    <div className="px-4 py-2 border-b border-gray-400">
                                        <p className="text-sm text-gray-700">
                                            Balance: <span className="font-semibold text-gray-900">{balance} BDT</span>
                                        </p>

                                    </div>
                                    <div className="py-1 flex justify-center">
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-primary btn-xs">
                                            Log Out
                                        </button>
                                    </div>

                                </MenuItems>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/auth/login"
                                className="btn btn-primary text-white px-4 py-1.5 rounded text-sm"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/auth/register"
                                className="btn btn-primary text-white px-4 py-1.5 rounded text-sm"
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex justify-center gap-5">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-blue-500'
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
