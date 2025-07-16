import { createContext, useContext, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../Auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userDetails) => {
      setUser(userDetails);
      if (userDetails) {
        const docRef = doc(db, "businesses", userDetails.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          setProfile({});
        }
      } else {
        setUser(null);
        setProfile({});
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
