const express = require("express");
const cors = require("cors");
require("./database");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/index"));
app.listen(PORT);
console.log(`Server on port ${PORT}`);
