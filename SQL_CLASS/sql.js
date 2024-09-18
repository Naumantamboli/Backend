const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");  //used to connect mysql to nodejs
const express = require("express");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : '8484882248'
})

//query is stored in a variable
// let query = "SHOW TABLES"; 

//1)To insert one user
// let query = "INSERT INTO USER (id,username,email,password) VALUES(?,?,?,?)";  FOR INSERTING ONE USER
// let user = ["123","123_newuser","abc.gmail.com","abc"];  //placeholder whose values can be passed in seperate array

//2)for inserting multiple users at once
// let query = "INSERT INTO USER (id,username,email,password) VALUES ?";
// let users = [["123B","123_newuserB","abc.gmail.comB","abcB"],
// ["123C","123_newuserC","abc.gmail.comC","abcC"],
// ["123D","123_newuserD","abc.gmail.comD","abcD"]
// ]

let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

//Inserting new data
// let query = "INSERT INTO USER (id,username,email,password) VALUES ?";
// let data = [];

// for(let i=0 ;i<= 100 ;i++){
//   data.push(getRandomUser());      //100 fake users data
// }

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
