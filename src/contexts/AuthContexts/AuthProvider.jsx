import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { auth } from '../../../firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    //? Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //? Create User with Goggle:
    const googleProvider = new GoogleAuthProvider();

    const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //? SignIn User:
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //? SignOut User:
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //? Observer:
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        })
    }, []);

    const authInfo = {
        loading,
        user,
        setUser,
        createUser,
        createGoogleUser,
        signInUser,
        signOutUser
    }

    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;