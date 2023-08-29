if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const errors = require("./middlewares/errors");
const routes = require("./router");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errors);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
