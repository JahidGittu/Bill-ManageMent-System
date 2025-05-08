import React, { use } from 'react';
import Home from '../Pages/Home';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const HomeLayouts = () => {

    const { loading } = use(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Home></Home>
        </div>
    );
};

export default HomeLayouts;