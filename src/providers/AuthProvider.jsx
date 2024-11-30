import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase.init';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) =>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) =>{
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userInfo = {
    user,
    loader,
    createUser,
    signInUser
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;