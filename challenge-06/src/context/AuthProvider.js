import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.provider>
  );
};

export default AuthContext;
