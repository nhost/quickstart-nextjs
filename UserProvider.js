import React, { useContext } from 'react';

const UserContext = React.createContext(null);

export function UserProvider({ children = null }) {
  const user = null;
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
