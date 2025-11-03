import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [users, setUsers] =useState(null);
    const [loading,setLoading] = useState(false)
    
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    };

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser=>{
            console.log('CurrentUser', currentUser);
            setUsers(currentUser);
        })
        return()=>{
            unsubcribe()
        }
    },[]);
    const userInfo ={
        loading,
        setLoading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;