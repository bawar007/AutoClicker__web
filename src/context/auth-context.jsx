import { createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  currentUserInfo: null,
  authenticate: async (user) => {},
  logout: () => {},
  setUserInfo: async (user) => {},
});
