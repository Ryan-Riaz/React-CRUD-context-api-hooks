//STEP:: 9 --> importing useContext for using global context values and methods
import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

//STEP:: 10 --> importing global context for consuming states and methods
import { GlobalContext } from "../context/GlobalState";

export const AddUser = () => {
	const [name, setName] = useState("");
	//STEP:: 11 --> get values from global context
	const { addUser } = useContext(GlobalContext);
	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			id: uuid(),
			name,
		};
		addUser(newUser);
		history.push("/");
	};

	const onChange = (e) => {
		setName(e.target.value);
	};

	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label>Name</Label>
				<Input
					type="text"
					value={name}
					onChange={onChange}
					name="name"
					placeholder="Enter user"
					required
				></Input>
			</FormGroup>
			<Button type="submit">Submit</Button>
			<Link to="/" className="btn btn-danger ml-2">
				Cancel
			</Link>
		</Form>
	);
};
