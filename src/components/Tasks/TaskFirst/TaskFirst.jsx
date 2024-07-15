import { useState } from "react";
import Title from "../../UI/Title";
import Button from "../../UI/Button";

const TaskFirst = ({ taskFourth }) => {
	const [open, setOpen] = useState(false);
	const onClose = () => setOpen((prev) => !prev);

	return (
		<>
			<Title>{taskFourth ? "Task 4:" : "Task 1:"}</Title>
			{taskFourth && open && <h2>Upps!</h2>}

			<Button onClick={onClose}>{open === true ? "Close" : "Open"}</Button>
			<hr />
		</>
	);
};
export default TaskFirst;
