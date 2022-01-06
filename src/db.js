const { connect } = require('mongoose');

// function to connect to mongodb
const connectDB = async () => {
  await connect('mongodb://localhost/taskcli');
  console.log('MongoDB Connected...');
};

module.exports = { connectDB };
