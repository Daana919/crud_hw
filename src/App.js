import React from "react";
import Counter from "./components/Counter/Counter";
import CounterContextProvider from "./counterContex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter2 from "./components/Counter2/Counter2";
//users
import AddForm from "./components/AddForm/AddForm";
import Details from "./components/Details/Details";
import UsersList from "./components/UsersList/UsersList";
import EditForm from "./components/EditForm/EditForm";
import UsersContextProvider from "./UsersContext";

const App = () => {
	return (
		<UsersContextProvider>
			<CounterContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/counter' element={<Counter />} />
						<Route path='/counter2' element={<Counter2 />} />
						{/* /users routers */}
						<Route path='/edit/:id' element={<EditForm />} />
						<Route path='/details/:id' element={<Details />} />
						<Route
							path='/users'
							element={
								<>
									<AddForm />
									<UsersList />
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
			</CounterContextProvider>
		</UsersContextProvider>
	);
};

export default App;
