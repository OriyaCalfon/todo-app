import { useState } from "react";
import { createTask } from "../api/api";
import { useTasks } from "../contexts/TaskContext";
import PrioritySelect from "./PrioritySelect";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("low");
    const [showForm, setShowForm] = useState(false);
    const { fetchTasks } = useTasks();

    const handleAdd = async () => {
        if (!title) return;
        await createTask({ title, priority });
        setTitle("");
        setPriority("low");
        fetchTasks();
        setShowForm(false);
    };


    return (
        <div>
            {!showForm ? (
                <button className="add-btn" onClick={() => setShowForm(true)}>➕</button>
            ) : (
                <div className="add-form">
                    <input
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <PrioritySelect value={priority} onChange={(e) => setPriority(e.target.value)} />
                    <div className="add-form-btns">
                        <button onClick={handleAdd}>Save</button>
                        <button onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTask;
