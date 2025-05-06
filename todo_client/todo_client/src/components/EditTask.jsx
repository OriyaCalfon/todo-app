
import { useState } from "react";
import PrioritySelect from "./PrioritySelect";


const EditTask = ({ task, onSave }) => {
    const [editingId, setEditingId] = useState(null);
    const [editedTask, setEditedTask] = useState({
        title: task.title,
        priority: task.priority,
    });

    const isEditing = editingId === task.id;

    const handleEditClick = () => {
        setEditingId(task.id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({ ...prev, [name]: value }));
    };

    const saveEdit = async () => {
        await onSave(task.id, editedTask);
        setEditingId(null);
    };

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            await saveEdit();
        }
    };

    return (
        <tr>
            <td>
                {isEditing ? (
                    <PrioritySelect
                        value={editedTask.priority}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    task.priority
                )}
            </td>
            <td>
                {isEditing ? (
                    <>
                        <input
                            className="edit-input"
                            type="text"
                            name="title"
                            value={editedTask.title}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="edit-btn" onClick={saveEdit}>Save</button>
                        <button className="edit-btn" onClick={handleCancelEdit}>Cancel</button>
                    </>
                ) : (
                    task.title
                )}
            </td>
            <td>
                <button onClick={handleEditClick}>✏️</button>
            </td>
            <td>
                <button onClick={() => onSave(task.id, null, true)}>❌</button>
            </td>
        </tr>
    );
};

export default EditTask;
