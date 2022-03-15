import { createContext, useState } from "react";

const context = createContext();

export function UserContext({ children }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(persistedUser);

  function login(userData) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return (
    <context.Provider value={{ user, login }}>{children}</context.Provider>
  );
}

export default context;
