const { program } = require('commander');
const { prompt } = require('inquirer');
const {
  addTask,
  listTasks,
  removeTask,
  updateTask,
} = require('./controllers/task.controllers');

program
  .version('0.0.1')
  .description('A simple command line tool to manage tasks');

const taskQuestion = [
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
];

//command: node src/commands.js save
program
  .command('save')
  .alias('s')
  .action(async () => {
    const answers = await prompt(taskQuestion);
    await addTask(answers);
  });

//command: node src/commands.js list
program
  .command('list')
  .alias('ls')
  .action(async () => await listTasks());

//command: node src/commands.js delete <id>
program
  .command('delete <id>')
  .alias('del')
  .action(async (_id) => removeTask(_id));

//command: node src/commands.js update <id>
program
  .command('update <id>')
  .alias('u')
  .action(async (_id) => {
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      console.error(
        'error: provide a valid id. ' +
          '\nCheck available ids with "node src/commands.js list"',
      );
      process.exit(1);
    }

    const answers = await prompt(taskQuestion);
    await updateTask(_id, answers);
  });

program.parse(process.argv);
