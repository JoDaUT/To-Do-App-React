import React from "react";
import "./ToDoItem.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";

import Checkbox from "@mui/material/Checkbox";

function ToDoItem({ toDo, onComplete, onDelete }) {
	return (
		<div className="ToDoItem">
			<div className="ToDoItem__Content">
				<p>
					<strong
						style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
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
				<IconButton onClick={() => onDelete(toDo)}>
					<CancelIcon color={"error"} fontSize={"large"}></CancelIcon>
				</IconButton>
			</div>
		</div>
	);
}

export default ToDoItem;
