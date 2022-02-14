import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { getToDoList } from "../../services/posts";

export default function ToDoList() {
	const toDoList = getToDoList().map((toDo) => {
		return <ToDoItem toDo={toDo} key={toDo.id}></ToDoItem>;
	});

	return <div className="toDoList">{toDoList}</div>;
}
