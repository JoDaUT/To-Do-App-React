import React from "react";

function ToDoItem(props) {
	const toDo = props.toDo;
	return (
		<div className="toDoItem">
			<hr></hr>
			<p>Id: {toDo.id}</p>
			<p>Content: {toDo.content}</p>
			<p>Created at: {toDo.createdAt.toDateString()}</p>
		</div>
	);
}

export default ToDoItem;
