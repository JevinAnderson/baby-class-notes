const express = require("express");
const path = require("path");
const morgan = require("morgan");
const open = require("open");

const app = express();

app.use(morgan("dev"));

const root = path.resolve(__dirname, "./docs");
app.use(express.static(root));

const PORT = 6007;
const URL = `http://127.0.0.1:${PORT}`;

app.listen(6007, (error) => {
  if (error) {
    console.log("docs-server startup error", error);
    process.exit(-1);
  }

  console.log(`docs-server started. Go to ${URL} in your browser.`);
  open(URL);
});
