import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const value = useMemo(
    () => ({
      isAuth,
      setAuth,
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
