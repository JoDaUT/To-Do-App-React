const key = "ToDosV1";

const localStorageValidation = () => {
	if (!localStorage) {
		throw new Error("This browser does not support localstorage");
	}
};
export const getToDoList = () => {
	localStorageValidation();
	let toDosRaw = localStorage.getItem(key);
	let toDos = JSON.parse(toDosRaw);
	toDos = toDos.sort((a, b) => b.createdAt - a.createdAt);
	return toDos;
};

export const saveTodos = (toDos = []) => {
	localStorageValidation();
	const toDosParsed = JSON.stringify(toDos);
	localStorage.setItem(key, toDosParsed);
};
