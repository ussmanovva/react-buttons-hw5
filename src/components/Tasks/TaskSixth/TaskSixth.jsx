import { useState } from "react";
import Button from "../../UI/Button";
import Title from "../../UI/Title";

const TaskSixth = () => {
	const [text, setText] = useState("");

	const changeText = (param) => setText(param);
	return (
		<>
			<Title>Task 6:</Title>
			<h2>{text}</h2>
			<Button onClick={() => changeText("HOME")}>HOME</Button>
			<Button onClick={() => changeText("ABOUT")}>ABOUT</Button>
			<Button onClick={() => changeText("CONTACT")}>CONTACT</Button>
			<hr />
		</>
	);
};

export default TaskSixth;
