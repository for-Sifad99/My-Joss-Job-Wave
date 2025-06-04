import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { auth } from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    //? Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //? Create User with Goggle:
    const googleProvider = new GoogleAuthProvider();

    const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //? Email verification:
    const emailVerification = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    //? Reset Password:
    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };


    //? SignIn User:
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //? SignOut User:
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    //? Observer:
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            // Post and Save JWT Token
            if (currentUser?.email) {
                const JWTtoken = { email: currentUser.email };

                // Post JWTtoken to Server
                axios.post('http://localhost:3000/jwt', JWTtoken)
                    .then(res => {
                        const token = res.data.token;
                        // BAD Way to Save
                        localStorage.setItem('token', token);
                        // console.log('JWTtoken: ',token);
                    })
                    .catch(error => console.log(error));
            };
        });
    }, []);

    const authInfo = {
        loading,
        user,
        setUser,
        createUser,
        createGoogleUser,
        emailVerification,
        signInUser,
        forgotPassword,
        signOutUser
    };

    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;