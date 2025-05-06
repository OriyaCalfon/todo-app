require("reflect-metadata");
const express = require("express");
const { AppDataSource } = require("./data-source");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


AppDataSource.initialize().then(() => {
  const taskRepo = AppDataSource.getRepository("Task");

  //Get all tasks
  app.get("/tasks", async (req, res) => {
    try {
      const tasks = await taskRepo.find({ order: { id: "ASC" } });

      res.json(tasks);
    } catch (error) {
      console.error("Error retrieving tasks:", error);
      res.status(500).json({ message: "Error retrieving tasks", error });
    }
  });

  //Add a new task
  app.post("/tasks", async (req, res) => {
    console.log("POST /tasks request received with data:", req.body);

    try {
      const task = taskRepo.create(req.body);
      const result = await taskRepo.save(task);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error saving task:", error);
      res.status(500).json({ message: "Error saving task", error });
    }
  });


  //Update task
  app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;

    try {
      const task = await taskRepo.findOneBy({ id: parseInt(id) });

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      task.title = title ?? task.title;
      task.priority = priority ?? task.priority;

      const updatedTask = await taskRepo.save(task);
      res.json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: "Error updating task", error });
    }
  });


  //Delete task
  app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const task = await taskRepo.findOneBy({ id: parseInt(id) });
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      await taskRepo.remove(task);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ message: "Error deleting task", error });
    }
  });



  // Starting the server
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}).catch((error) => {
  console.error("DB connection failed:", error);
});
