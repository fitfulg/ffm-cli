const { connect, connection } = require('mongoose');

const { MONGODB_URI } = require('./config');

// function to connect to mongodb
const connectDB = async () => {
  await connect(MONGODB_URI);
};

connection.on('error', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = { connectDB, connection };
