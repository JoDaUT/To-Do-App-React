import React from "react";

import { genUUID } from "../../helpers/uuid";
import { ToDoCreateButtonView } from "./ToDoCreateButtonView";

function ToDoCreateButton({ createToDo }) {
	let [showForm, setShowForm] = React.useState(false);
	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toggleForm();

		const createAt = new Date();
		const id = genUUID();
		const content = e.target.content.value;

		if (!createAt || !id || !content) {
			throw new Error("Invalid form values");
		}
		const formData = new FormData(e.target);

		const toDo = {
			id,
			createdAt: new Date(createAt),
			content,
			completed: false,
		};
		createToDo(toDo);
	};
	return (
		<ToDoCreateButtonView
			showForm={showForm}
			toggleForm={toggleForm}
			handleSubmit={handleSubmit}
		></ToDoCreateButtonView>
	);
}

export default ToDoCreateButton;
