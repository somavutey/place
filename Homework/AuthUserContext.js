import { createContext, useContext, Context } from 'react'
import firebase from 'firebase'
import React from 'react'
require('firebase/auth')
//import { useFirebaseAuth } from 'firebase';

const authUserContext = createContext({
    authUser: null,
    loading: true
});

export function AuthUserProvider({ children }) {
    const auth = firebase.auth;
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);