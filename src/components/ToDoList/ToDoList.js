import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { ToDoContext } from "../../context/toDo";
import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList(props) {
	const { searchedToDos } = useContext(ToDoContext);

	if (searchedToDos.length === 0) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", pt: "2rem" }}>
				<CircularProgress />
			</Box>
		);
	} else {
		return (
			<Box>
				{searchedToDos.map((toDo) => (
					<ToDoItem key={toDo.id} toDo={toDo}></ToDoItem>
				))}
			</Box>
		);
	}
}
