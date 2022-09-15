require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");
app.use(cookieParser());
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(express.json());
app.use(urlencoded({ extended: true }));

require("./startups/db")();
require("./startups/config")();
require("./startups/routes")(app);

if (process.env.port === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
  });
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
  });
} else {
  console.log("port connection wrong");
  // app.use(express.static(path.join(__dirname, "./frontend/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
  // });
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening port on ${port}`);
});
