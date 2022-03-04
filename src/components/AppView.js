import React from "react";
import { ToDoConsumer } from "../context/toDo";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoCreateButton from "./ToDoCreateButton/ToDoCreateButton";
import ToDoList from "./ToDoList/ToDoList";
import ToDoSearch from "./ToDoSearch/ToDoSearch";

export function AppView({}) {
	return (
		<React.Fragment>
			<ToDoCounter></ToDoCounter>
			<ToDoSearch></ToDoSearch>
			<ToDoCreateButton></ToDoCreateButton>
			<ToDoList></ToDoList>
		</React.Fragment>
	);
}
