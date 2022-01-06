const { program } = require('commander');
const { prompt } = require('inquirer');
const {
  addTask,
  listTasks,
  removeTask,
} = require('./controllers/task.controllers');

program
  .version('0.0.1')
  .description('A simple command line tool to manage tasks');

const taskQuestions = [
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
    const answers = await prompt(taskQuestions);
    await addTask(answers);
  });

//command: node src/commands.js list
program.command('list');
alias('ls').action(async () => await listTasks());

//command: node src/commands.js delete <id>
program
  .command('delete <id>')
  .alias('del')
  .action(async (_id) => removeTask(_id));

program.parse(process.argv);
