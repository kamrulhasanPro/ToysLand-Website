import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import Spinner from '../Components/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loader} = useAuth()
    const location = useLocation()
    if(loader){
        return <Spinner className={'flex grow items-center justify-center shrink'}/>
    }

    if(user){
        return children
    }

    return (
        <Navigate to={'/login'} state={location.pathname}/>
    );
};

export default PrivateRoute;