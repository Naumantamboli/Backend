const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");  //used to connect mysql to nodejs
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');
uuidv4(); 

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : '8484882248'
})


let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// try{
//   connection.query(query,[data],(err,result)=>{ 
//     if(err){
//       throw err;
//     };
//     console.log(result);
//   })
// }catch(err){
//   console.log(err);
// }


app.get("/",(req,res)=>{
  let q = "SELECT COUNT(*) FROM user";
  try{
    connection.query(q, (err, result) => { 
      if (err) throw err;
      let count = result[0]['COUNT(*)'];  
      res.render("home.ejs", { count });
  });
    }
    catch(err){
      console.log(err);
      res.send("some error in database");
    }
})

//show users
app.get("/users",(req,res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, users) => { 
      if (err) throw err;
      // res.send(result);
      res.render("showusers.ejs",{users});
  });
    }
    catch(err){
      console.log(err);
      res.send("some error in database");
    }
})

app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try{
    connection.query(q, (err, result) => { 
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
      console.log(result);
  });
    }
    catch(err){
      console.log(err);
      res.send("some error in database");
    }
})

//update route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password :formPass,username:newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try{
    connection.query(q, (err, result) => { 
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("wrong password");
      }else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/users");
        })
      }
   });
    }
    catch(err){
      res.send("some error in database");
      console.log(err);
    }
})

//get add page
app.get("/users/add",(req,res)=>{
  res.render("adduser.ejs");
})

//add the user
app.post("/users", (req, res) => {
  let { username, email } = req.body;
  let id = uuidv4();
  let password = uuidv4();
  let q = `INSERT INTO user (id, email, username, password) VALUES ('${id}', '${email}', '${username}' ,'${password}')`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
  }
});

//get delete page
app.get("/users/delete",(req,res)=>{
  res.render("delete.ejs");
})

app.delete("/users",(req,res)=>{
  let {username} = req.body;
  let q = `DELETE FROM user WHERE username = '${username}' `
  connection.query(q,(err,result)=>{
    try{
      if(err) throw err;
      console.log(result); 
      res.redirect("/users");
    }catch(err){
      console.log(err);
    }
  })
})

app.listen(port,(req,res)=>{
  console.log(`server listening on port ${8080}`);
})
