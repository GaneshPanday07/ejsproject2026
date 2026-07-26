const express = require('express')
const connect = require('./connection')
const student = require('./routes/studentRouter')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(student)
connect();


//server code
app.listen(3000, (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("server is runing on port 3000.....")
    }
})