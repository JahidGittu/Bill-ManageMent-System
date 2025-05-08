import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export const AuthContext = createContext();

const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    const [balance, setBalance] = useState(() => {
        const stored = localStorage.getItem('balance');
        return stored ? parseFloat(stored) : 10000; // initial balance
    });

    useEffect(() => {
        localStorage.setItem('balance', balance);
    }, [balance]);

    const updateBalance = (amount) => {
        setBalance(prev => {
            const newBal = prev - amount;
            localStorage.setItem('balance', newBal);
            return newBal;
        });
    };



    const createUser = (email, password) => {
        // console.log(email, password);
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userProfile) => {
        return updateProfile(auth.currentUser, userProfile)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe
        }
    }, [])

    const createUserwithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const userData = {
        user,
        setUser,
        createUser,
        loginUser,
        loading,
        setLoading,
        logout,
        updateUser,
        balance,
        updateBalance,
        createUserwithGoogle
    }


    return (
        <div>

            <AuthContext value={userData}>
                {children}
            </AuthContext>

        </div>
    );
};

export default AuthProvider;