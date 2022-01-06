const { connect, connection } = require('mongoose');

// function to connect to mongodb
const connectDB = async () => {
  await connect('mongodb://localhost/taskcli');
};

connection.on('error', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = { connectDB, connection };
