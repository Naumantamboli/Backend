const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");  //used to connect mysql to nodejs

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : '8484882248'
})

try{
  connection.query("SHOW TABLES",(err,result)=>{
    if(err){
      throw err;
    };
    console.log(result);
  })
}catch(err){
  console.log(err);
}

let createRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}