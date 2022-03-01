import React from "react";
import "./ToDoCounter.css";
export default function ToDoCounter({ toDosCompleted, totalOfToDos }) {
	return (
		<h1 className="ToDoCounter">
			Completed {toDosCompleted}/{totalOfToDos}
		</h1>
	);
}
