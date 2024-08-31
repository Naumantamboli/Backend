const express = require("express");
const app = express();
const path = require("path");
 
// console.dir(app);

const port = 8080; //8080

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})

app.get("/",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("home.ejs",{diceVal});
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceVal});
})

// app.get("/ig/:username", (req,res)=>{
//     // let {username} = req.params;
//     // let followers = ["nauman","farhat","john","jacob"];
//     // console.log(username);
//     // res.render("instagram.ejs", {username ,followers})

//     let {username} = req.params;
//     const instaData = require("./data.json")
//     const data = instaData[username];
//     if(data){
//         console.log(data);
//         res.render("instagram.ejs", {data});
//     }
//     else{
//         res.render("error.ejs");
//     }
// })

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("practice.ejs",{username});
})

