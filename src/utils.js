const { connection } = require('./db');

const exitProcess = async () => {
  await connection.close();
  process.exit(0);
};

module.exports = {
  exitProcess,
};
