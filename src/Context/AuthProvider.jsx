import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
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

    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            setUsers(user)
            return(user)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>setLoading(false))
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
        users,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;