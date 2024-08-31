const express = require("express");
const app = express();
const path = require("path");  

let port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

// app.get("/",(req,res)=>{
//     res.send("i love music");
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'random.html'));
});