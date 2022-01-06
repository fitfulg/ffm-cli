const { connectDB } = require('./db');
// require('./commands');

async function main() {
  await connectDB();
}
//node src/index.js
main();
