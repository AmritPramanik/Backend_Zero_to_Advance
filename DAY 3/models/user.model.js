const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
        minlength : [3,"Username must be 3 character Long"]
    },
    email :{
        type : String,
        required : true,
        trim : true,
        unique : true,
        minlength : [10,"email must be 10 character Long"]
    },
    password :{
        type : String,
        required : true,
        trim : true,
        minlength : [5,"password must be 5 character Long"]
    }
})

const user = mongoose.model('user',userSchema)

module.exports = user;