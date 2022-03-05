import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const ToDoContext = createContext();
const ToDoConsumer = ToDoContext.Consumer;
function ToDoProvider(props) {
	const key = "ToDosV1";
	const [searchValue, setSearchValue] = useState("");
	const {
		item: toDos,
		saveItem: saveToDos,
		loading,
	} = useLocalStorage(key, []);

	const toDosCompleted = toDos.filter((toDo) => toDo.completed).length;
	const totalOfToDos = toDos.length;

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

	const searchValueChanged = (event) => {
		const text = event.target.value;
		setSearchValue(text);
	};

	const completeToDo = (toDo) => {
		const index = toDos.findIndex((item) => item.id === toDo.id);
		const newToDos = [...toDos];
		newToDos[index].completed = newToDos[index].completed ? false : true;
		saveToDos(newToDos);
	};
	const deleteToDo = (toDo) => {
		const newToDos = [...toDos];
		const index = newToDos.findIndex((item) => item.id === toDo.id);
		newToDos.splice(index, 1);
		saveToDos(newToDos);
	};

	const createToDo = (toDo) => {
		const newToDos = [...toDos];
		newToDos.unshift(toDo);
		saveToDos(newToDos);
	};

	return (
		<ToDoContext.Provider
			value={{
				createToDo,
				deleteToDo,
				completeToDo,
				searchValueChanged,
				searchedToDos,
				toDosCompleted,
				totalOfToDos,
				loading,
			}}
		>
			{props.children}
		</ToDoContext.Provider>
	);
}

export { ToDoProvider, ToDoConsumer, ToDoContext };
