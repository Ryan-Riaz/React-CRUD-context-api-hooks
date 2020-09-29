// STEP:: 1 --> importing createContext and useReducer
import React, { createContext, useReducer } from "react";

// importing reducer fn from an individual file
import AppReducer from "./AppReducer";

// STEP:: 3 --> creating a Initial State variable
const initialState = {
	users: [],
};

// STEP:: 4 --> Create a Context for global using
export const GlobalContext = createContext(initialState);

// STEP:: 5 --> Create a Provider Component that wraps app/any parent component
export const GlobalProvider = ({ children }) => {
	// STEP:: 6 --> creating useReduce hook for holding states
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//creating essential Actions for global methods/functionalities
	const removeUser = (id) => {
		dispatch({
			type: "REMOVE_USER",
			payload: id,
		});
	};

	const addUser = (user) => {
		dispatch({
			type: "ADD_USER",
			payload: user,
		});
	};

	const editUser = (user) => {
		dispatch({
			type: "EDIT_USER",
			payload: user,
		});
	};
	// STEP:: 7 --> return global provider and by its values passes global state and methods
	return (
		<GlobalContext.Provider
			value={{
				users: state.users,
				removeUser,
				addUser,
				editUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
