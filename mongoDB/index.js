const mongoose = require('mongoose');

main().then(()=>{      //first we need to make a connection and then execute the further code then only the code will make sense
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {        
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({           //define the Schema of the collection
    name : String,
    email : String,
    age : Number
})

const User = mongoose.model("User",userSchema);

// const user2 = new User({
//     name : "najma",
//     email : "najma@gmail.com",
//     age : 82
// })

// //to insert it into the database use .save method
// user2.save().then((res)=>{   //this also returns a promise so use .then
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//for inserting one element at once
// User.create({
//     name : "najma",
//     email : "najma@gmail.com",
//     age : 82
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//for inserting many users at once
// User.insertMany([
//     {name : "jakir",email : "jakir@gmail.com",age : 47},
//     {name : "rubina", email : "rubina@gmail.com" ,age : 43},
//     {name : "farhat" , email : "farhat@gmail.com" , age : 14}
// ]).then((res)=>{
//     console.log(res);
// })

//find in mongoose
// User.find({age : {$gte : 47}})
// .then(res=>{
//     console.log(res)
// })

// User.findOne({age : {$gte : 47}})
// .then(res=>{
//     console.log(res)
// })

// User.findById("66ec540925c7cbafcf582e49")    //using id
// .then(res=>{
//     console.log(res)
// })

//update
// User.updateOne({name : "jakir"},{age : 40})
// .then((res)=>{
//     console.log(res);
// })

// User.updateMany({age : {$in : [14]}},{age : 15})
// .then((res)=>{
//     console.log(res);
// })

//find and update
// User.findOneAndUpdate({name : "jakir"},{age : 47},{new : true})
// .then(res => {
//     console.log(res);
// })

//delete
// User.deleteOne({name : "mahamud"})
// .then(res =>{
//     console.log(res);
// })

// User.deleteMany({age : 15})
// .then(res =>{
//     console.log(res);
// })

// User.findByIdAndDelete("66eb2fda9b5d3586c4e2e0f2")
// .then(res =>{
//     console.log(res);
// })


