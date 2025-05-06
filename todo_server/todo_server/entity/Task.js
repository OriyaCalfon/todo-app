require("reflect-metadata");
const { EntitySchema } = require("typeorm");

const Task = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    priority: {
      type: "varchar",
      default: "low",
    },
  },
});

module.exports = { Task };
