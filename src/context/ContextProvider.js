import React, { useState, useEffect } from "react";
import UserServices from "../services/UserService";

export const Context = React.createContext();

export default function AppProvider({ children }) {

    const [user, setUser]= useState({name:"", points:""});

    const getUserData = async () => { 
        const userData = await UserServices.getUserInfo();
        console.log(userData);
        setUser(userData); 
    }

    useEffect(() => getUserData(),[]); 
  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
}