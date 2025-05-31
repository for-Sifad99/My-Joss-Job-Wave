import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // set loading when user Null
    if (loading) {
        return <div className='flex flex-col mx-auto mt-12 justify-center items-center'><span className="loading loading-dots loading-xl" /></div>
    };

    // navigate user where he/she want to go After login
    if (!user && !user?.email) {
        return <Navigate to='/login' state={location?.pathname} />;
    };

    // return children 
    return children;
};

export default PrivetRouter;


