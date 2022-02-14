import React from "react";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoCreateButton from "./ToDoCreateButton/ToDoCreateButton";
import ToDoList from "./ToDoList/ToDoList";
import ToDoSearch from "./ToDoSearch/ToDoSearch";

export default function App() {
	return (
		<React.Fragment>
			<ToDoCounter></ToDoCounter>
			<ToDoSearch></ToDoSearch>
			<ToDoList></ToDoList>
			<ToDoCreateButton></ToDoCreateButton>
		</React.Fragment>
	);
}
