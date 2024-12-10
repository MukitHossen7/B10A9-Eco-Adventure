/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refetch, setRefetch] = useState();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const createSignUpNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInExistingUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const profileUpdate = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      connection();
      // setUser(null);
    };
  }, [refetch]);
  const authInfo = {
    createSignUpNewUsers,
    signInExistingUsers,
    logOut,
    signInWithGoogle,
    user,
    updateUserProfile,
    loading,
    profileUpdate,
    setEmail,
    email,
    setRefetch,
    refetch,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
