const Task = require('../models/Task');
const { exitProcess } = require('../utils');

const addTask = async (task) => {
  await Task.create(task);
  console.log('New Task Created');
  exitProcess();
};

const findTasks = async (word) => {
  const search = new RegExp(word, 'i');
  const tasks = await Task.find({
    $or: [{ title: search }, { description: search }], // mongoDB $or operator
  });
  if (tasks.length === 0 || !tasks) {
    console.log('No task found');
    exitProcess();
  } else {
    console.table(
      tasks.map((task) => ({
        title: task.title,
        description: task.description,
      })),
    );
    exitProcess();
  }
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
  exitProcess();
};

const updateTask = async (_id, newTask) => {
  await Task.updateOne({ _id }, newTask);
  console.info('Task Updated');
  exit();
};

const removeTask = async (id) => {
  await Task.findByIdAndDelete(id);
  console.log('Task Deleted');
  exit();
};

module.exports = {
  addTask,
  listTasks,
  removeTask,
  updateTask,
  findTasks,
};
