const { program } = require('commander');
const { prompt } = require('inquirer');
const {
  addCheatSheet,
  findCheatSheet,
  listCheatSheet,
  removeCheatSheet,
  updateCheatSheet,
} = require('./controllers/cheatsheet.controllers');

program
  .version('0.0.1')
  .description('A simple command line tool to manage cheatsheets');

const csQuestion = [
  {
    type: 'input',
    message: 'Kind of cheatsheet (eg: java):',
    name: 'kind',
  },
  {
    type: 'input',
    message: 'Cheatsheet title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Cheatsheet description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Example of the output:',
    name: 'example',
  },
];

//command: ffm add
program
  .command('add')
  .alias('a')
  .action(async () => {
    const answers = await prompt(csQuestion);
    await addCheatSheet(answers);
  });

//command: ffm list
program
  .command('list')
  .alias('ls')
  .action(async () => await listCheatSheet());

//command: ffm delete <id>
program
  .command('delete <id>')
  .alias('del')
  .action(async (_id) => removeCheatSheet(_id));

//command: ffm update <id>
program
  .command('update <id>')
  .alias('u')
  .action(async (_id) => {
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      console.error(
        'error: provide a valid id. ' + '\nCheck available ids with "ffm list"',
      );
      process.exit(1);
    }

    const answers = await prompt(csQuestion);
    await updateCheatSheet(_id, answers);
  });

//command: ffm find <text>
program
  .command('find <CSheet>')
  .alias('f')
  .action(async (text) => {
    await findCheatSheet(text);
  });

program.parse(process.argv);
