const CheatSheet = require('../models/CheatSheet');
const { exitProcess } = require('../utils');

const addCheatSheet = async (csheet) => {
  await CheatSheet.create(csheet);
  console.log('New Cheatsheet Created');
  exitProcess();
};

const findCheatSheet = async (word) => {
  const search = new RegExp(word, 'i');
  const cSheets = await CheatSheet.find({
    $or: [
      { kind: search },
      { title: search },
      { description: search },
      { example: search },
    ], // mongoDB $or operator
  });
  if (cSheets.length === 0 || !cSheets) {
    console.log('No cheatsheet found');
    exitProcess();
  } else {
    console.table(
      cSheets.map((cs) => ({
        kind: cs.kind,
        title: cs.title,
        description: cs.description,
        example: cs.example,
      })),
    );
    exitProcess();
  }
};

const listCheatSheet = async () => {
  const cSheets = await CheatSheet.find().lean();
  console.table(
    cSheets.map((cs) => ({
      _id: cs._id.toString(),
      kind: cs.kind,
      title: cs.title,
      description: cs.description,
      example: cs.example,
    })),
  );
  exitProcess();
};

const updateCheatSheet = async (_id, newCS) => {
  await CheatSheet.updateOne({ _id }, newCS);
  console.info('Cheatsheet Updated');
  exitProcess();
};

const removeCheatSheet = async (id) => {
  await CheatSheet.findByIdAndDelete(id);
  console.log('Cheatsheet Deleted');
  exitProcess();
};

module.exports = {
  addCheatSheet,
  findCheatSheet,
  listCheatSheet,
  removeCheatSheet,
  updateCheatSheet,
};
