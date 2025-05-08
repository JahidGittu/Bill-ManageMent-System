import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        // console.log(email, password);
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        logout
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