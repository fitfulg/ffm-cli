const { program } = require('commander');
const { prompt } = require('inquirer');
const { addTask } = require('./controllers/task.controllers');
const { listTasks } = require('./controllers/task.controllers');

program
  .version('0.0.1')
  .description('A simple command line tool to manage tasks');

//command: node src/commands.js save
program.command('save').action(async () => {
  const answers = await prompt([
    {
      type: 'input',
      message: 'What is the title of the task?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Task description',
      name: 'description',
    },
  ]);
  await addTask(answers);
});

//command: node src/commands.js list
program.command('list').action(
  async () => await listTasks(),
  // const tasks = await Task.find();
  // console.log(tasks);
);
program.parse(process.argv);
