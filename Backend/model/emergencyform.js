const mongoose = require("mongoose");

const emergencyformSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    userId: {
        type: String,
      },
    email : {
      type: String
    },
    nameoftheservice: {
      type: String,
    },
    previousorderId: {
      type: String,
    },
    date: {
      type: String,
    },
    phone:{
        type:Number
    }
},    
  {
    timestamps: true,
  }
);

const EmergencyForm = mongoose.model("EmergencyForm", emergencyformSchema);

exports.EmergencyForm = EmergencyForm;
