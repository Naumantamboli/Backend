const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
}) 

app.get("/",(req,res)=>{
    res.send("req on root path");
})

//path parameters (name & rollno are treated as variables)
// app.get("/:name/:rollno",(req,res)=>{
//     let {name ,rollno} = req.params;
//     res.send(`<h1>the name is ${name} & the roll no is ${rollno}</h1>`)
// })

app.get("/:username/:followers",(req,res)=>{
    let {username ,followers} = req.params;
    res.send(`<h1>Instagram username: @${username}</h1>
        <h2>Followers: ${followers}</h2>`)
})

app.get("*",(req,res)=>{
    res.send("no such path exists")
})