import React from "react";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

function ToDoSearch({ handleSearchValueChanged }) {
	return (
		<Grid container justifyContent="center">
			<InputBase
				placeholder="Buscar to-do"
				inputProps={{ "aria-label": "Buscar to-do" }}
				onChange={handleSearchValueChanged}
			/>
			<IconButton type="text" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Grid>
	);
}

export default ToDoSearch;
