import { createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  authenticate: async (user) => {},
  logout: () => {},
});
