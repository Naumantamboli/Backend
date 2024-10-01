const express = require("express");
const app = express();

const port = 3000;

app.use((req,res,next)=>{           //middlewares
    console.log("middleware working");
    next();     //req forwaded to the server
})

app.get("/",(req,res)=>{
    res.send("i am root path");
})

app.get("/about",(req,res)=>{
    res.send("i am about path");
})

app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`);
})