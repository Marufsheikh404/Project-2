import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init'
import axiosPublic from '../Hook/useAxiosPublic';


const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const axios = axiosPublic;


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // User Login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // User LogOut
    const SignOut = async () => {
        try {
            await signOut(auth)
        }
        catch (error) {
            console.log(error)
        }
    };

    // UpdateProfile
    const updateimge = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // Google Login
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                const userInfo = {
                    email: user.email,
                    name: user.displayName,
                    role: 'user',
                    create_at: new Date().toISOString(),
                    last_login_in: new Date().toISOString()
                }
                const res = await axios.post('/users', userInfo)
                console.log(res.data)
                setUsers(user)
                return (user)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    };

    // User Manages
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('CurrentUser', currentUser);
            setUsers(currentUser);
        })
        return () => {
            unsubcribe()
        }
    }, []);
    const userInfo = {
        users,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        SignOut,
        updateimge
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;