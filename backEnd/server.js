if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const bodyParser = require("body-parser");
const express = require("express");
require("./src/Config/dataBase");
const app = express();
const port = 3000;

// Use the body-parser middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
const my_routes = require("./src/Routes");
app.use("/", my_routes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
