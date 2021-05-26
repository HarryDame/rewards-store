import React, { useState, useEffect } from "react";
import UserServices from "../services/UserService";

export const Context = React.createContext();

export default function AppProvider({ children }) {

    const [user, setUser]= useState({name:"", points:""});

    const getUserData = async () => { 
        const usuario = await UserServices.getUser();
        console.log(usuario);
        setUser(usuario); 
    }

    useEffect(() => getUserData(),[]); 
  return (
    <Context.Provider value={{ user }}>
      {children}
    </Context.Provider>
  );
}