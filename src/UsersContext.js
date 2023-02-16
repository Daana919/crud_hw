import React, { useState } from "react";
import axios from "axios";

export const usersContext = React.createContext();

const UsersContextProvider = ({ children }) => {
	const API = "http://localhost:8000/users";
	const [users, setUsers] = useState([]);
	const [oneUser, setOneUser] = useState(null);

	async function getUsers() {
		let res = await axios(API);
		setUsers(res.data);
	}

	async function createUser(newUser) {
		await axios.post(API, newUser); //where and what
		getUsers();
	}

	async function getOneUser(id) {
		let res = await axios(`${API}/${id}`);
		setOneUser(res.data);
	}

	async function updateUser(id, editedUser) {
		await axios.patch(`${API}/${id}`, editedUser); //ято на что поменять
		getUsers();
	}

	async function deleteUser(id) {
		await axios.delete(`${API}/${id}`);
		getUsers();
	}

	return (
		<usersContext.Provider
			value={{
				users,
				oneUser,

				getUsers,
				createUser,
				getOneUser,
				updateUser,
				deleteUser,
			}}
		>
			{children}
		</usersContext.Provider>
	);
};
export default UsersContextProvider;
