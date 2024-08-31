const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

//creating & starting  a server
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
}) 


//sending response
// app.use((req,res)=>{
//     console.log("request recieved");
//     // res.send({           (res in json format)
//     //     fruit : "apple",
//     //     color : "red"
//     // });
//     // res.send("<h1>my name is nauman</h1>")   (res in html format)
// })

//for get requests (use either app.use or app.get for sending response not both at same time)

app.get("/",(req,res)=>{
    res.send("<h1>this is a root path</h1>");
})

app.get("/apple",(req,res)=>{
    res.send("<h1>you contacted apple path</h1>");
})

app.get("*",(req,res)=>{
    res.send("this path doesnt exists");
})

//for post requests
app.post("/",(req,res)=>{
    res.send("you sent a post request");
})
