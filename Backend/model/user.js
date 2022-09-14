const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userSchema = new mongoose.Schema(
  { userId :{
    type:String
  },
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 200,
      unique: true,
    },
    isadmin:{
      type:String
    },

    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    points: {
      type: Number,
    },
    voucher:{
      type:Number
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    resetToken: String,

    expireToken: Date,
  },
  {
    timestamps: true,
  }
);

const todoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    todoText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const jwtPrivateKey = process.env.jwtPrivateKey;

  const token = jwt.sign(
    { _id: this._id, username: this.username, email: this.email },
    jwtPrivateKey,
    {
      expiresIn: "24h",
    }
  );
  return token;
};

const User = mongoose.model("User", userSchema);
const TodoText = mongoose.model("TodoText", todoSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(200).required().email(),
    phone: Joi.number().required(),
    password: Joi.string().min(5).max(1024).required(),
    points :Joi.number(),
    voucher :Joi.number()
  });

  return schema.validate(user);
};

exports.User = User;
exports.TodoText = TodoText;
exports.validate = validateUser;
