import { useState } from "react";
import Button from "../../UI/Button";
import Title from "../../UI/Title";

const TaskSecond = () => {
	const [count, setCount] = useState(0);

	const incrementCounter = () => setCount(count + 1);
	const decrementCounter = () => (count > 0 ? setCount(count - 1) : count);

	return (
		<>
			<Title>Task 2:</Title>
			<Button onClick={incrementCounter}>Increment</Button>
			<Button onClick={decrementCounter}>Decrement</Button>
			<Title>{count}</Title>
			<hr />
		</>
	);
};

export default TaskSecond;
