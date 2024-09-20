const mongoose = require('mongoose');

main().then(()=>{      //first we need to make a connection and then execute the further code then only the code will make sense
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {        
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({          //define the Schema of the collection
    title : {
        type : String,
        required : true,
        maxLength : 20
    },
    author : {
        type : String
    },
    price : {
        type : Number,
        min : 1
    },
    discount : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        enum : ["fiction"]
    }
})

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title : "DC",
    author : "Man Lee",
    price : 150,
    category : "fiction"
})
book1.save()
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
})