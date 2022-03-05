import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { ModalContext } from "../context/modal";
import { Modal } from "./Modal/Modal";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoCreateButton from "./ToDoCreateButton/ToDoCreateButton";
import ToDoList from "./ToDoList/ToDoList";
import ToDoSearch from "./ToDoSearch/ToDoSearch";
import "./App.css";

export function AppView({}) {
	const {
		showModal,
		setShowModal,
		setCancel,
		setConfirmation,
		cancel,
		confirmation,
	} = useContext(ModalContext);

	function handleCancel(event) {
		setCancel(!cancel);
		setShowModal(false);
	}
	function handleConfirmation(event) {
		setConfirmation(!confirmation);
		setShowModal(false);
	}
	return (
		<React.Fragment>
			{!!showModal && (
				<Modal>
					<div className="modal__card">
						<div className="modal__content">
							<p>Do you want to delete this ToDo?</p>
						</div>
						<div className="button__group">
							<Button color="secondary" onClick={handleCancel}>
								Cancelar
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={handleConfirmation}
							>
								Aceptar
							</Button>
						</div>
					</div>
				</Modal>
			)}
			<ToDoCounter></ToDoCounter>
			<ToDoSearch></ToDoSearch>
			<ToDoCreateButton></ToDoCreateButton>
			<ToDoList></ToDoList>
		</React.Fragment>
	);
}
