import { Button, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./ToDoCreateButton.css";

function ToDoCreateButtonView({
	showForm,
	toggleForm,
	handleSubmit,
	text,
	setText,
}) {
	function onChangeText(e) {
		setText(e.target.value);
	}

	return (
		<div className="ToDoCreateButton">
			{!showForm && (
				<Fab color="primary" aria-label="add" onClick={toggleForm} hidden>
					<AddIcon />
				</Fab>
			)}
			<form onSubmit={handleSubmit} hidden={!showForm} className="form">
				<TextField
					name="content"
					id="content"
					label="Content"
					variant="standard"
					fullWidth
					className="input"
					value={text}
					onChange={onChangeText}
				/>
				<Button type="submit">Crear</Button>
			</form>
		</div>
	);
}

export { ToDoCreateButtonView };
