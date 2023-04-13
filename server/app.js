require("dotenv").config();
const express = require("express");
// const routes = require('./routes')
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes)
// app.use(errors)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
