import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuth from "../firebase/initialize-firebase";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        //
      }
      setIsLoading(false);
    });
  }, []);
  return {
    user,
    error,
    setError,
    setUser,
    googleSignIn,
    logOut,
    setIsLoading,
    isLoading,
  };
};
export default useFirebase;
