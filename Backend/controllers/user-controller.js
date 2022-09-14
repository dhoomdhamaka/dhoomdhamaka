const config = require("config");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("../model/user");
// const { User } = require("../model/User");

//verifying user

function verifyToken(req, res, next) {
  const token = req.cookies.Token;
  const jwtPrivateKey = process.env.jwtPrivateKey;

  if (!token)
    res.status(400).json({ message: "Accesss Denied. No Token Provided" });

  try {
    const decoded = jwt.verify(token, jwtPrivateKey);
    console.log(decoded);
    req.id = decoded.id;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid Token" });
  }
}

//getting user details

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;

  user = await User.findById(userId, "-password");
  // try {
  //   return user;
  // } catch (err) {
  //   return new Error(err);
  // }
  if (!user) {
    return res.status(404).json({ messsage: "User Not FOund" });
  } else {
    return res.status(200).json({ user });
  }
};

//logout

const logout = (req, res, next) => {
  const token = req.cookies.bandhanUserToken;
  const jwtPrivateKey = process.env.jwtPrivateKey;

  if (!token)
    res.status(400).json({ message: "Accesss Denied. No Token Provided" });
  else {
    jwt.verify(token, jwtPrivateKey, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Authentication failed" });
      } else {
        req.cookies[`${user.id}`] = "";
        return res
          .clearCookie("bandhanUserToken")
          .status(200)
          .json({ message: "Successfully Logged Out" });
      }
    });
  }
  next();
};

// module.exports = verifyToken;
// module.exports = getUser;
module.exports = logout;
