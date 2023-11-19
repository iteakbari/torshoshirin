"use client";
import useAuth from "@/hooks/useAuth";
import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: null,
});

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
