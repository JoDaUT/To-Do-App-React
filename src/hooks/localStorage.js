import { useState, useEffect } from "react";
export function useLocalStorage(key, defaultValue) {
	if (!localStorage) {
		setItem(null);
		throw Error("Local Storage not supported");
	}

	const [item, setItem] = useState(defaultValue);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			const localStorageItem = localStorage.getItem(key);
			if (!localStorageItem) {
				const serializedValue = JSON.stringify(defaultValue);
				localStorage.setItem(key, serializedValue);
			} else {
				const deserializedValue = JSON.parse(localStorageItem);
				setItem(deserializedValue);
			}
			setLoading(false);
		}, 1000);
	}, []);

	const saveItem = (item) => {
		const serializedValue = JSON.stringify(item);
		localStorage.setItem(key, serializedValue);
		setItem(item);
	};

	return { item, saveItem, loading };
}
