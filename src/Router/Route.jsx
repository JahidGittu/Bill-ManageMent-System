import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const Route = () => {
    const { loading } = use(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main>

                <Outlet></Outlet>

            </main>

            <footer>

                <Footer></Footer>

            </footer>

        </div>
    );
};

export default Route;