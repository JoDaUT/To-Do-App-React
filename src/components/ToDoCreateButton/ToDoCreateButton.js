import React, { useContext } from "react";
import { ToDoContext } from "../../context/toDo";

import { genUUID } from "../../helpers/uuid";
import { ToDoCreateButtonView } from "./ToDoCreateButtonView";

function ToDoCreateButton(props) {
	const { createToDo } = useContext(ToDoContext);
	let [showForm, setShowForm] = React.useState(false);
	let [text, setText] = React.useState("");
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
		setText("");
		createToDo(toDo);
	};
	return (
		<ToDoCreateButtonView
			showForm={showForm}
			toggleForm={toggleForm}
			text={text}
			setText={setText}
			handleSubmit={handleSubmit}
		></ToDoCreateButtonView>
	);
}

export default ToDoCreateButton;
