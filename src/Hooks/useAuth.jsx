import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext';

const useAuth = () => {
    return useContext(AuthContext)
};

export  {useAuth};