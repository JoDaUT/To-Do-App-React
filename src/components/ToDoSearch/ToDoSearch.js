import React, { useContext } from "react";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { ToDoContext } from "../../context/toDo";

function ToDoSearch(props) {
	const { searchValueChanged } = useContext(ToDoContext);

	return (
		<Grid container justifyContent="center">
			<InputBase
				placeholder="Buscar to-do"
				inputProps={{ "aria-label": "Buscar to-do" }}
				onChange={searchValueChanged}
			/>
			<IconButton type="text" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Grid>
	);
}

export default ToDoSearch;
