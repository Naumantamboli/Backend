const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String,
    },
    created_at : {
        type: Date,
        default: Date.now // Automatically sets the current date
    }
})

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;