const config = require("config");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("../model/user");

function auth(req, res, next) {
  const token = req.cookies.bandhanUserToken;
  const jwtPrivateKey = process.env.jwtPrivateKey;

  if (!token) res.status(400).send("Accesss Denied. No Token Provided");

  try {
    const decoded = jwt.verify(token, jwtPrivateKey);
    req.user = decoded;
    req.id = decoded._id;
    req.userName = decoded.username;
    next();
  } catch (ex) {
    res.clearCookie("bandhanUserToken");
    res.status(400).send("Invalid Token");
  }
}

const getUser = async (req, res, next) => {
  console.log("ddds");
  const userId = req.id;
  console.log(userId);
  let user;

  user = await User.findById(userId, "-password");

  if (!user) {
      console.log("!use r");
    return res.status(404).json({ messsage: "User Not FOund" });
  } else {
      console.log("user");
    return res.status(200).json({ user });
  }
  next()
};

module.exports = auth;

// module.exports = getUser;
