import React from "react";
import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };