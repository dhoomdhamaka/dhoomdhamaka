const mongoose = require("mongoose");

const eventNameSchema = new mongoose.Schema({
    userId : String,
    name_Of_The_Event : String
})

const EventName = mongoose.model("EventName", eventNameSchema);

exports.EventName = EventName;
