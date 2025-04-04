import { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { getUserTokens, saveUser } from "../utils/http";
import { getUserInfo } from "../utils/subscriptionHTTP";
import { auth } from "../firebaseConfig";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);

  const authenticate = async (user) => {
    const response = await saveUser(user);
    if (response) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const setUserInfo = async (user) => {
    const userInfo = await getUserInfo(user.uid);

    const userTokens = await getUserTokens(user.uid);
    const buildUser = { ...user, userInfo, userTokens };
    setCurrentUserInfo(buildUser);
  };

  useEffect(() => {
    if (currentUser) setUserInfo(currentUser);
  }, [currentUser]);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        setCurrentUser(false);
        setCurrentUserInfo(false);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const value = {
    currentUser: currentUser,
    currentUserInfo: currentUserInfo,
    authenticate: authenticate,
    logout: logOut,
    setUserInfo: setUserInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
