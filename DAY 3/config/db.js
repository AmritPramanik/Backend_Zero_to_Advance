const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb://0.0.0.0/men_drive').then(()=>{
        console.log("Database Connected ........");
    })
}

module.exports = connectToDB;