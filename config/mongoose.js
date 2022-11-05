const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo_db');

const db= mongoose.connection;

db.on('err',console.error.bind("error in conecting database"));

db.once('open',function () {
    console.log("Database connected successfully");
})