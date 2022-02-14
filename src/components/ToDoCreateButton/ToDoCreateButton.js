import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import "./ToDoCreateButton.css";

function ToDoCreateButton() {
	return (
		<div className="ToDoCreateButton">
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
		</div>
	);
}

export default ToDoCreateButton;
