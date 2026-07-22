const mongoose = require('mongoose');

const connect = async ()=> {
    try{
        await mongoose.connect('mongodb://localhost:27017/mern2026frontend')
        console.log("db connected...")
    } catch(err) {
        console.log(err);
    }
}
module.exports = connect