import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Shared/Loader';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // set loading when user Null
    if (loading) {
        return <Loader />
    };

    // navigate user where he/she want to go After login
    if (!user && !user?.email) {
        return <Navigate to='/login' state={location?.pathname} />;
    };

    // return children 
    return children;
};

export default PrivetRouter;


