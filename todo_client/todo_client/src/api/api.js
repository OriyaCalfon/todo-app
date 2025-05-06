const API_URL = 'http://localhost:3000';


export const getTasks = async () => {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return await res.json();
  } catch (err) {
    console.error('Error getting tasks:', err);
    throw err;
  }
};


export const createTask = async ({ title, priority }) => {
  try {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, priority }),
    });
    if (!res.ok) throw new Error('Failed to create task');
    return await res.json();
  } catch (err) {
    console.error('Error creating task:', err);
    throw err;
  }
};


export const updateTask = async (id, updatedData) => {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  } catch (err) {
    console.error("Error updating task:", err);
    throw err;
  }
};



export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete task');
  } catch (err) {
    console.error('Error deleting task:', err);
    throw err;
  }
};
