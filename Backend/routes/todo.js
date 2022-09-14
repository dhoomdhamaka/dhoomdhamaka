const express = require("express");
const auth = require("../middleware/auth");
const { validate, User, TodoText } = require("../model/user");
// const auth = require('../middleware/auth');
const _ = require("lodash");
const router = express.Router();

//getting already saved data

router.get("/", auth, async (req, res) => {
  if (req.id) {
    let todos = await TodoText.find({ userId: req.id });
    // console.log(todos);
    res.status(200).send(todos);
  }
});

// saving data

router.post("/", auth, async (req, res) => {
  if (req.id) {
    let user = await User.findOne({ _id: req.id });

    if (user) {
      console.log("ok user");

      todoTxt = new TodoText({
        userId: req.id,
        todoText: req.body.todoTxt,
      });

      await todoTxt.save((err, doc) => {
        if (!err) {
            console.log("saved");
          res.status(200).send(doc);
        } else {
            console.log("not saved");
        //   res.status(400).send(err);
        }
      });
    }
  }
});

//deleting the data

router.delete("/:id", auth, async (req, res) => {
  console.log("del req");
  console.log(req.params);
  if (req.id) {
    TodoText.findByIdAndDelete(req.params.id, (err, doc) => {
      if (!err) {
        res.status(200).send(doc);
        console.log("ok");
      } else {
        res.status(400).send(err);
        console.log("no ok");
      }
    });
  }
});
module.exports = router;
