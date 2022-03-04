import React, { useContext } from "react";
import { ToDoConsumer, ToDoContext } from "../../context/toDo";
import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList(props) {
	const { searchedToDos } = useContext(ToDoContext);
	return (
		<div className="toDoList">
			{searchedToDos.map((toDo) => (
				<ToDoItem key={toDo.id} toDo={toDo}></ToDoItem>
			))}
		</div>
	);
}
