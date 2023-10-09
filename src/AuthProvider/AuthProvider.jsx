import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
}
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    
    // Create user using email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Login with email and Password

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email,password)
    }

    //Login with google.
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Reset Password

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //OnAuthState 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        createUser,
        googleLogin,
        emailLogin,
        resetPassword,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;