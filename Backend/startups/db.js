const mongoose = require("mongoose");

module.exports = function () {
  let db
  if(process.env.port === "production"){
    db = process.env.DB 
    console.log("Trying to connect Online Cluster");
  }else{
    db= "mongodb://localhost/cookies"
    console.log("Trying to connect Local DB");
  }
  mongoose
    .connect(db)
    .then(() => console.log("db connected succesfully"))
    .catch((err) => console.error("Could not connect to mongodb....", err));
};
