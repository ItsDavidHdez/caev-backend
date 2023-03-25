const mongoose = require("mongoose");

const DATABASE = process.env.DATABASE;
console.log(DATABASE);

mongoose
  .connect(`mongodb://127.0.0.1:27017/Caev_MX`, {})
  .then((db) => console.log(`Caev_MX is connected`))
  .catch((err) => console.log(err));
