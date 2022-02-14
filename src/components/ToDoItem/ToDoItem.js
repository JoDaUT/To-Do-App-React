import React from "react";
import "./ToDoItem.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";

const deleteToDoItem = (e) => {
	console.log("delete toDo");
};

const completeToDoItem = (e) => {
	console.log("complete toDo");
};

function ToDoItem(props) {
	const toDo = props.toDo;

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
				<p>Id: {toDo.id}</p>
				<p>Created at: {toDo.createdAt.toDateString()}</p>
			</div>

			<div className="ToDoItem__ButtonGroup">
				<IconButton onClick={completeToDoItem}>
					<CheckCircleIcon
						color={toDo.completed ? "disabled" : "success"}
						fontSize={"large"}
					></CheckCircleIcon>
				</IconButton>
				<IconButton onClick={deleteToDoItem}>
					<CancelIcon color={"error"} fontSize={"large"}></CancelIcon>
				</IconButton>
			</div>
		</div>
	);
}

export default ToDoItem;
