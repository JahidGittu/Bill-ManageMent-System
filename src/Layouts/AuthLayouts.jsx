import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const AuthLayouts = () => {
    const { loading } = use(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayouts;