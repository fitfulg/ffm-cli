const { connection } = require('../db');
const Task = require('../models/Task');

const addTask = async (task) => {
  await Task.create(task);
  console.log('New Task Created');
  await connection.close();
};

const listTasks = async () => {
  const tasks = await Task.find().lean();
  console.table(
    tasks.map((task) => ({
      _id: task._id.toString(),
      title: task.title,
      description: task.description,
    })),
  );
  await connection.close();
  process.exit(0);
};

const removeTask = async (id) => {
  await Task.findByIdAndDelete(id);
  console.log('Task Deleted');
  await connection.close();
  process.exit(0);
};

module.exports = {
  addTask,
  listTasks,
  removeTask,
  // findTask,
  // updateTask,
  // listTasks,
};
