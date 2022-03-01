import React, { useEffect } from "react";
import { getToDoList, saveTodos } from "../services/posts";
import { AppView } from "./AppView";

export default function App() {
	const [searchValue, setSearchValue] = React.useState("");
	const [toDos, setToDos] = React.useState(getToDoList());
	const [toDosCompleted, setToDosCompleted] = React.useState(
		toDos.filter((toDo) => toDo.completed).length
	);
	const [totalOfToDos, setTotalOfToDos] = React.useState(toDos.length);

	const filterOptions = (toDo, text) => {
		if (toDo.id.includes(text)) {
		}
		return toDo.content.includes(text) || toDo.id.includes(text);
	};

	const handleSearchValueChanged = (event) => {
		const text = event.target.value;
		setSearchValue(text);
		let toDos = getToDoList();
		toDos.sort((a, b) => b.createdAt - a.createdAt);

		toDos = toDos.filter((toDo) => filterOptions(toDo, text));
		setToDos(toDos);
	};

	const handleToDoCompleted = (toDo) => {
		const index = toDos.findIndex((item) => item.id === toDo.id);
		const newToDos = [...toDos];
		newToDos[index].completed = newToDos[index].completed ? false : true;
		setToDos(newToDos);
		setToDosCompleted(newToDos.filter((toDo) => toDo.completed).length);
		saveTodos(newToDos);
	};
	const handleToDoDeleted = (toDo) => {
		const newToDos = [...toDos];
		const index = newToDos.findIndex((item) => item.id === toDo.id);
		newToDos.splice(index, 1);
		setToDos(newToDos);
		saveTodos(newToDos);
	};

	const handleCreateToDo = (toDo) => {
		const newToDos = [...toDos];
		newToDos.unshift(toDo);
		setToDos(newToDos);
		saveTodos(newToDos);
	};

	useEffect(() => {
		return () => {
			console.log("componentWillMount");
		};
	});

	return (
		<AppView
			toDosCompleted={toDosCompleted}
			totalOfToDos={totalOfToDos}
			handleSearchValueChanged={handleSearchValueChanged}
			handleCreateToDo={handleCreateToDo}
			toDos={toDos}
			handleToDoCompleted={handleToDoCompleted}
			handleToDoDeleted={handleToDoDeleted}
		></AppView>
	);
}
