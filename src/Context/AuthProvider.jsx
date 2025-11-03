import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [users, serUsers] =useState(null);
    const [loading,setLoading] = useState(false)
    
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    
    const userInfo ={
        loading,
        setLoading,
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;