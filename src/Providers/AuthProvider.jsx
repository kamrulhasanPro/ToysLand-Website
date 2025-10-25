import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children}) => {

    const [toysData, setToysData] = useState([])
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        try {
            fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setToysData(data)
            })
        } catch (error) {
            console.log(error);
        }
    },[])


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

    // store data
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => unsubscribe()
    },[])


    const authInfo = {
        toysData,
        loader, 
        setLoader,
        createUser,
        loginUser,
        logOutUser,
        user
    }

    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;