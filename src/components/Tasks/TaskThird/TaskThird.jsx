import { useState } from "react";
import Input from "../../UI/Input";
import Title from "../../UI/Title";
const body = document.getElementById("body");

const TaskThird = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckbox = () => setIsChecked(!isChecked);

	body.style.backgroundColor = isChecked ? "black" : "white";
	body.style.color = isChecked ? "white" : "black";

	return (
		<>
			<Title>Task 3:</Title>
			<Input checked={isChecked} onChange={handleCheckbox} />
			<hr />
		</>
	);
};

export default TaskThird;
