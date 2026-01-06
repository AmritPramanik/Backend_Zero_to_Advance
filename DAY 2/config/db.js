
const mongoose = require('mongoose');

const connection =  mongoose.connect('mongodb://0.0.0.0/userData').then(()=>{
    console.log('Database Connected');  
}).catch(()=>{
    console.log('Database not Connected'); 
})

module.exports = connection;