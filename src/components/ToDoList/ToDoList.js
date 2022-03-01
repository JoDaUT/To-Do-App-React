import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ toDos, onToDoCompleted, onToDoDeleted }) {
	const toDoList = toDos.map((toDo) => {
		return (
			<ToDoItem
				key={toDo.id}
				toDo={toDo}
				onComplete={onToDoCompleted}
				onDelete={onToDoDeleted}
			></ToDoItem>
		);
	});

	return <div className="toDoList">{toDoList}</div>;
}
