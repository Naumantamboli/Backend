const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
}) 

app.get("/",(req,res)=>{
    res.send("req on root path");
})


//while searching write => /search?q=something&q=something

app.get("/search",(req,res)=>{   
    let {q} = req.query;
    console.log(q);
    if(!q){
        res.send("nothing searched");
    }
    else
    res.send(`<h1> Query strings: ${q}</h1>`);
})
