import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logout, } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <div className='flex justify-between items-center p-4'>
            <div className="brand">
                <img className='w-16' src="https://i.ibb.co/4wXBgWLk/PayBill.png" alt="" />
            </div>

            <div className="navmenu">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/bills"> Bills </NavLink>
                <NavLink to="/profile"> Profile </NavLink>
            </div>

            <div className="user space-x-5">
                {
                    user && user.email ?
                        <Link onClick={handleLogout} className='btn btn-primary'>Logout</Link> :

                        <>
                            <Link className='btn btn-primary ' to="/auth/register">Register</Link>
                            <Link className='btn btn-primary ' to="/auth/login">Login</Link>
                        </>
                }
            </div>
        </div >
    );
};

export default Navbar;