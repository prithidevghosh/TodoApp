
const mongoose=require('mongoose');

const todo=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})

const tasks=mongoose.model("tasks_db",todo);
module.exports=tasks;

