import React, { createContext, useEffect } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [name, setName] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [profile, setProfile] = React.useState({
    nama: "",
    hp: "",
    email: "",
  });

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(localStorage.getItem("isAuth"));
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{ profile, setProfile, name, setName, isAuth, setIsAuth }}
    >
      {children}
    </UserContext.Provider>
  );
}
