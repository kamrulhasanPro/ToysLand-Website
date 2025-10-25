import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({children}) => {

    const [toysData, setToysData] = useState([])
    useEffect(()=>{
        try {
            fetch('/data.json')
            .then(res => res.json())
            .then(data => setToysData(data))
        } catch (error) {
            console.log(error);
        }
    },[])

    const authInfo = {
        toysData
    }

    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;