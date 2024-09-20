
// sample data agar db khali mile to initialise karke testing kar sakte hai
const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "nauman",
        to: "farhat",
        msg: "what are you doing",
        created_at: new Date()
    },
    {
        from: "jakir",
        to: "rubina",
        msg: "who are you",
        created_at: new Date()
    },
    {
        from: "alfiya",
        to: "farzin",
        msg: "when are you coming",
        created_at: new Date()
    },
];

Chat.insertMany(allChats)
