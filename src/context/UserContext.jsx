import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

export const UserContext = React.createContext();

export default function UserContextProvider({children}) {

	const [user, setUser] = useState({name:"", points:"", redeemHistory: []});

	const getUser = async () => {
		const newUser = await UserService.getUserInfo();
		setUser(newUser);
	}

	useEffect(() => {
		getUser();
	}, [])

	useEffect(() => {
	}, [user])

	return(
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}
