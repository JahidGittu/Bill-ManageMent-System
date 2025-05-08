import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

export default PrivateRoutes;