import React, { useContext } from "react";
import "./ToDoCounter.css";
import { ToDoConsumer, ToDoContext } from "../../context/toDo";
export default function ToDoCounter() {
	const { toDosCompleted, totalOfToDos } = useContext(ToDoContext);
	return (
		<h1 className="ToDoCounter">
			Completed {toDosCompleted}/{totalOfToDos}
		</h1>
	);
}
