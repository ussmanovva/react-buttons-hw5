import TaskEighth from "./TaskEighth/TaskEighth";
import TaskFifth from "./TaskFifth/TaskFifth";
import TaskFirst from "./TaskFirst/TaskFirst";
import TaskSecond from "./TaskSecond/TaskSecond";
import TaskSeventh from "./TaskSeventh/TaskSeventh";
import TaskSixth from "./TaskSixth/TaskSixth";
import TaskThird from "./TaskThird/TaskThird";

const Tasks = () => {
	return (
		<>
			<TaskFirst />
			<TaskSecond />
			<TaskThird />
			<TaskFirst taskFourth={true} />
			<TaskFifth />
			<hr />
			<TaskSixth />
			<TaskSeventh />
			<TaskEighth />
		</>
	);
};

export default Tasks;
