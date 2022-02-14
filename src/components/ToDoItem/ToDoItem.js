import React from "react";
import "./ToDoItem.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

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
					<strong>{toDo.content}</strong>
				</p>
				<p>Id: {toDo.id}</p>
				<p>Created at: {toDo.createdAt.toDateString()}</p>
			</div>
			<div className="ToDoItem__ButtonGroup">
				<AiFillCheckCircle
					color={"green"}
					size={"35px"}
					cursor={"pointer"}
					onClick={completeToDoItem}
				></AiFillCheckCircle>
				<AiFillCloseCircle
					color={"red"}
					size={"35px"}
					cursor={"pointer"}
					onClick={deleteToDoItem}
				></AiFillCloseCircle>
			</div>
		</div>
	);
}

export default ToDoItem;
