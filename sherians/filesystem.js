const fs = require("fs");

// fs.writeFile("hey.txt","hi i am nauman",function(err){
//     if(err){
//         console.log(err);
//     }
//     else console.log("done");
// }) 

// fs.appendFile("hey.txt",", I am in 2nd year",function(err){
//     if(err){
//         console.log(err);
//     }
//     else console.log("done");
// })  

// fs.rename("hey.txt","hi.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else console.log("done");
// }) 

// fs.copyFile("hi.txt", "./copy/copy.txt", function(err) {
//     if (err) {
//         console.error("Error copying file:", err);
//     } else { 
//         console.log("File copied successfully.");
//     }
// });

// fs.rm("./copy", {recursive: true},function(err){
//     if(err) console.log(err);
//     else console.log("folder removed");
// })

// fs.mkdir("./copy",function(err){
//     if(err) console.log(err);
//     else console.log("folder created");
// })

// read file
fs.readFile("./hi.txt",function(err,data){
    if(err) console.log(err);
    console.log(data.toString());
})





