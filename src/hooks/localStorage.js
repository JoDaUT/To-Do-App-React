import { useState, useEffect } from "react";
export function useLocalStorage(key, defaultValue) {
	if (!localStorage) {
		setItem(null);
		throw Error("Local Storage not supported");
	}

	const [item, setItem] = useState(defaultValue);

	useEffect(() => {
		setTimeout(() => {
			const localStorageItem = localStorage.getItem(key);
			if (!localStorageItem) {
				const serializedValue = JSON.stringify(defaultValue);
				localStorage.setItem(key, serializedValue);
			} else {
				const deserializedValue = JSON.parse(localStorageItem);
				setItem(deserializedValue);
			}
		}, 1000);
	}, []);

	const saveItem = (item) => {
		const serializedValue = JSON.stringify(item);
		localStorage.setItem(key, serializedValue);
		setItem(item);
	};

	return [item, saveItem];
}
