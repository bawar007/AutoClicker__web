import { useState } from "react";
import { AuthContext } from "./auth-context";
import { saveUser } from "../utils/http";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const authenticate = async (user) => {
    const response = await saveUser(user);
    if (response) setCurrentUser(user);
  };

  const logOut = () => {
    setCurrentUser(false);
  };

  const value = {
    currentUser: currentUser,
    authenticate: authenticate,
    logout: logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
