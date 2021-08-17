import React, { useState, useEffect } from 'react';
import { firebaseAuth } from '../config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    function login(email, password) {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    function signout() {
        // setCurrentUser(null);
        return firebaseAuth.signOut();
    }
    function signup(email, password) {
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            console.log("Inside auth state changed ", user);
            setCurrentUser(user);
        });
    }, []);

    let value = {
        currentUser: currentUser,
        signout: signout,
        login: login,
        signup: signup
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;