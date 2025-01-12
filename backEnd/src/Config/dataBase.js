const mongoose = require("mongoose");

main().then(() => console.log("Database Connected"));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
