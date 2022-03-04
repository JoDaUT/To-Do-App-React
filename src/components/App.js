import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { AppView } from "./AppView";

export default function App() {
	const [searchValue, setSearchValue] = useState("");
	const [toDos, saveToDos] = useLocalStorage("ToDosV1", []);

	const toDosCompleted = toDos.filter((toDo) => toDo.completed).length;

	const filterOptions = (toDo, text) => {
		if (toDo.id.includes(text)) {
		}
		return toDo.content.includes(text) || toDo.id.includes(text);
	};

	let searchedToDos = [];
	if (searchValue.length === 0) {
		searchedToDos = toDos;
	} else {
		toDos.sort((a, b) => b.createdAt - a.createdAt);
		searchedToDos = toDos.filter((toDo) => filterOptions(toDo, searchValue));
	}

	const handleSearchValueChanged = (event) => {
		const text = event.target.value;
		setSearchValue(text);
	};

	const handleToDoCompleted = (toDo) => {
		const index = toDos.findIndex((item) => item.id === toDo.id);
		const newToDos = [...toDos];
		newToDos[index].completed = newToDos[index].completed ? false : true;
		saveToDos(newToDos);
	};
	const handleToDoDeleted = (toDo) => {
		const newToDos = [...toDos];
		const index = newToDos.findIndex((item) => item.id === toDo.id);
		newToDos.splice(index, 1);
		saveToDos(newToDos);
	};

	const handleCreateToDo = (toDo) => {
		const newToDos = [...toDos];
		newToDos.unshift(toDo);
		saveToDos(newToDos);
	};

	return (
		<AppView
			toDosCompleted={toDosCompleted}
			totalOfToDos={toDos.length}
			handleSearchValueChanged={handleSearchValueChanged}
			handleCreateToDo={handleCreateToDo}
			toDos={searchedToDos}
			handleToDoCompleted={handleToDoCompleted}
			handleToDoDeleted={handleToDoDeleted}
		></AppView>
	);
}
