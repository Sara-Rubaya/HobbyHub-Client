import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    

    return children;
};

export default PrivateRoute;