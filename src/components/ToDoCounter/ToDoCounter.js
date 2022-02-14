import React from "react";
import "./ToDoCounter.css";
export default function ToDoCounter(props) {
	const toDosCompleted = 3;
	const totalOfToDos = 10;
	return (
		<h1 className="ToDoCounter">
			Has completado {toDosCompleted} de {totalOfToDos}
		</h1>
	);
}
