import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { usersContext } from "../../UsersContext";

const Details = () => {
	const { id } = useParams();
	const { getOneUser, oneUser } = useContext(usersContext);

	useEffect(() => {
		getOneUser(id);
	}, []);

	return (
		<div className='container'>
			{oneUser ? (
				<>
					<div>Name: {oneUser.name}</div>
					<div>Email: {oneUser.email}</div>
					<div>Age: {oneUser.age} </div>
				</>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default Details;
