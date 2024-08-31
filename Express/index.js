const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});

// app.use((req, res) => {
//     console.log(req);
//     console.log("request received");
//     res.send({
//         Name : "nauman",
//         PRN : 12211418
//     })
//     let code = "<h1>Nauman</h1><ul><li>apple</li><li>banana</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    console.log("request recieved");
    res.send("you contacted root path");
});

// app.get("/apple", (req, res) => {
//     console.log("request recieved");
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     console.log("request recieved");
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request");
// });

// // Path parameters
// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     let htmlstr = `<h1>welcome to the page of Nauman</h1>`;
//     res.send(htmlstr);
// });

// // Query Strings
app.get("/search", (req, res) => {
    let { q } = req.query;
    console.log("query: " + q);
    if (!q) {
        res.send("No search query");
    } else {
        res.send(`These are the queries: ${q}`);
    }
});
