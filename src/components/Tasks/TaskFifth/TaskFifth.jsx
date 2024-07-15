import { useState } from "react";
import Button from "../../UI/Button";
import Title from "../../UI/Title";
import { CircularProgress } from "@mui/material";

const TaskFifth = () => {
	const [isLoading, setIsLoading] = useState(false);

	const openLoading = () => setIsLoading((prev) => !prev);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Title>Task 5:</Title>
			{isLoading && <CircularProgress />}
			<Button onClick={openLoading}>START</Button>
			<hr />
		</div>
	);
};

export default TaskFifth;
