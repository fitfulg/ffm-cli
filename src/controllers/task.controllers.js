const { connection } = require('../db');
const Task = require('../models/Task');

const addTask = async (task) => {
  await Task.create(task);
  console.log('New Task Created');
  await connection.close();
};

module.exports = {
  addTask,
  // findTask,
  // updateTask,
  // removeTask,
  // listTasks,
};
