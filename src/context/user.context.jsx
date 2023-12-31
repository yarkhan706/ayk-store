import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unSub = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return unSub;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
