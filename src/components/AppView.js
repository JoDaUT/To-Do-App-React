import React from "react";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoCreateButton from "./ToDoCreateButton/ToDoCreateButton";
import ToDoList from "./ToDoList/ToDoList";
import ToDoSearch from "./ToDoSearch/ToDoSearch";

export function AppView({
	toDosCompleted,
	totalOfToDos,
	handleSearchValueChanged,
	handleCreateToDo,
	toDos,
	handleToDoCompleted,
	handleToDoDeleted,
}) {
	return (
		<React.Fragment>
			<ToDoCounter
				toDosCompleted={toDosCompleted}
				totalOfToDos={totalOfToDos}
			></ToDoCounter>
			<ToDoSearch
				handleSearchValueChanged={handleSearchValueChanged}
			></ToDoSearch>
			<ToDoCreateButton createToDo={handleCreateToDo}></ToDoCreateButton>
			<ToDoList
				toDos={toDos}
				onToDoCompleted={handleToDoCompleted}
				onToDoDeleted={handleToDoDeleted}
			></ToDoList>
		</React.Fragment>
	);
}
