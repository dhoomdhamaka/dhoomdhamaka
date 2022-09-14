const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const auth = require("../middleware/auth")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {User} = require("../model/user")



router.get("/",async (req,res)=>{
    var users = await User.find({_id:req.id})
     
    if(users[0].isadmin === "true"){
        console.log(users[0].isadmin);
        res.status(200).send(users[0])
    }
    else{
        res.send("invalid")
    }
})


module.exports = router
