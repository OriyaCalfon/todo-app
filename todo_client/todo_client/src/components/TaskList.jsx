import { useTasks } from "../contexts/TaskContext";
import { deleteTask, updateTask } from "../api/api";

import EditTask from "./EditTask";

const TaskList = () => {
    const { tasks, fetchTasks } = useTasks();

    const handleSave = async (id, data, isDelete = false) => {
        if (isDelete) {
            await deleteTask(id);
        } else {
            await updateTask(id, data);
        }
        await fetchTasks();
    };


    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks yet</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Priority</th>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <EditTask key={task.id} task={task} onSave={handleSave} />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;