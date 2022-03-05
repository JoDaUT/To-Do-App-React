import { createContext, useEffect, useState } from "react";

const ModalContext = createContext();

function ModalProvider(props) {
	const [showModal, setShowModal] = useState(false);
	const [confirmation, setConfirmation] = useState(false);
	const [cancel, setCancel] = useState(false);
	const [callback, setCallback] = useState(null);

	const openModal = (callback) => {
		setConfirmation(false);
		setCancel(false);
		setShowModal(true);
		setCallback(() => callback);
	};
	useEffect(() => {
		if (confirmation && callback) {
			callback();
		}
	}, [confirmation]);

	return (
		<ModalContext.Provider
			value={{
				showModal,
				setShowModal,
				confirmation,
				setConfirmation,
				cancel,
				setCancel,
				openModal,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
}
export { ModalProvider, ModalContext };
