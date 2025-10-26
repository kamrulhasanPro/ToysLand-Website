import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)




    // create user
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    // another login system 
    const otherLogin = (provider) => {
        return signInWithPopup(auth, provider )
    }

    // store data
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => unsubscribe()
    },[])


    const authInfo = {
        loader, 
        setLoader,
        createUser,
        loginUser,
        logOutUser,
        otherLogin,
        user
    }

    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;