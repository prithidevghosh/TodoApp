const express=require('express');
const port = 8000;
const path=require('path');
const app=express();
const db=require('./config/mongoose')
const tasks=require('./model/schema');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('static'));
app.use(express.urlencoded());


app.get('/',function (req,res) {
    tasks.find({},function (err,newTask) {
        if(err){
            console.log("error in fetching data from database");
            return;
        }
      
        return res.render('home',{
            taskList:newTask
        })
    })
})

app.get('/delete-all/',function (req,res) {
    console.log(req.body);
    tasks.deleteMany({},function (err) {
        if(err){
            console.log("error in delete function of database");
            return;
        }
        
    }) 
    return res.redirect('back');
})
var list=[

]
app.post('/delete-custom/',function (req,res) {
    console.log(req.query);
})

app.get('/delete-contact/',function (req,res) {
    const id=req.query.id;
    
    tasks.findByIdAndDelete(id,function (err) {
        if(err){
            console.log("error in deleting content from database");
            return;
        }
        return res.redirect('back');
    })
})

app.post('/add-task',function (req,res) {
    console.log(req.body.date);
    tasks.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function (err,newTasks) {
        if(err){
            console.log("error in punching data to database");
            return;
        }
        return res.redirect('back');
    })
})

app.listen(port,function (err) {
    if(err){
        console.log("error in firing up server");
        return;
    }
    console.log("server fired up at port: ",port);
})