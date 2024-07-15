import { useState } from "react";
import Button from "../../UI/Button";
import Title from "../../UI/Title";

const TaskSeventh = () => {
	const [item, setItem] = useState("");

	const changeItem = (param) => setItem(param);
	return (
		<>
			<Title>Task 7:</Title>
			<Button onClick={() => changeItem("Item 1")}>Item 1</Button>
			<Button onClick={() => changeItem("Item 2")}>Item 2</Button>
			<Button onClick={() => changeItem("Item 3")}>Item 3</Button>
			<Button onClick={() => changeItem("Item 4")}>Item 4</Button>
			<Button onClick={() => changeItem("Item 5")}>Item 5</Button>
			<h2>
				You selected:
				<b style={{ color: "#007bfff6", background: "#007bff21" }}> {item}</b>
			</h2>
			<hr />
		</>
	);
};

export default TaskSeventh;
