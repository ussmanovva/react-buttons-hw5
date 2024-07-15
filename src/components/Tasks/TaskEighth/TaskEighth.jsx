	import { useState } from "react";
	import Button from "../../UI/Button";
	import Title from "../../UI/Title";

	const tasksName = [
		{ task: "Task-1", isCompleted: "NOT COMPLETED" },
		{ task: "Task-2", isCompleted: "COMPLETED" },
		{ task: "Task-3", isCompleted: "NOT COMPLETED" },
		{ task: "Task-4", isCompleted: "COMPLETED" },
	];

	const TaskEighth = () => {
		const [filterButton, setFilterButton] = useState(null);

		return (
			<>
				<Title>Task 8:</Title>
				<Button onClick={() => setFilterButton(null)}>ALL</Button>
				<Button onClick={() => setFilterButton("COMPLETED")}>COMPLETED</Button>
				<Button onClick={() => setFilterButton("NOT COMPLETED")}>
					UNCOMPLETED
				</Button>
				{tasksName.map((item, index) => {
					if (!filterButton || item.isCompleted === filterButton) {
						return (
							<h3 key={index}>
								{item.task} {item.isCompleted}
							</h3>
						);
					}
				})}
				<hr />
			</>
		);
	};

	export default TaskEighth;
