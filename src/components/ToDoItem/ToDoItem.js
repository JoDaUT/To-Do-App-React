import React, { useContext, useEffect, useState } from "react";
import "./ToDoItem.css";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

import Checkbox from "@mui/material/Checkbox";
import { ToDoContext } from "../../context/toDo";
import "../Modal/Modal.css";
import { ModalContext } from "../../context/modal";
function ToDoItem({ toDo }) {
	const { deleteToDo: onDelete, completeToDo: onComplete } =
		useContext(ToDoContext);
	const { showModal, openModal } = useContext(ModalContext);

	function deleteModal() {
		onDelete(toDo);
	}

	return (
		<div className="ToDoItem">
			<div className="ToDoItem__Content">
				<p>
					<strong
						style={{
							textDecoration: toDo.completed ? "line-through" : "none",
						}}
					>
						{toDo.content}
					</strong>
				</p>
				<p>Id: {toDo.id.substring(0, 8)}</p>
				<p>Created at: {toDo.createdAt.toString()}</p>
			</div>

			<div className="ToDoItem__ButtonGroup">
				<Checkbox
					checked={toDo.completed}
					size="large"
					onClick={() => onComplete(toDo)}
				/>
				{/* <IconButton onClick={() => onDelete(toDo)}> */}
				<IconButton onClick={() => openModal(deleteModal)}>
					<CancelIcon color={"error"} fontSize={"large"}></CancelIcon>
				</IconButton>
			</div>
		</div>
	);
}

export default ToDoItem;
