import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getBalance as loadBalance, setBalance as saveBalance } from '../Utility/LocalStorage';

// Initialize Firebase Authentication
const auth = getAuth(app);

export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [balance, setBalance] = useState(() => {
    const stored = loadBalance();
    return isNaN(stored) ? 10000 : stored;
  });
  console.log(balance);

  useEffect(() => {
    saveBalance(balance);
  }, [balance]);

  const updateBalance = (amount) => {
    setBalance((prev) => {
      const newBal = prev - amount;
      return newBal;
    });
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userProfile) => {
    return updateProfile(auth.currentUser, userProfile);
  };

  const createUserwithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

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
    createUserwithGoogle,
  };

  return (
    <AuthContext value={userData}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
