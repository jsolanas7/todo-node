const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


let User = new Schema({
    firstName:{
        type: String,
        required: [true, 'First name is required']
    },
    surName:{
        type: String,
        required: [true, 'Surname is required']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password:{
        type: String,
        require:[true, 'Password is required'],
    },
    Tasks:[{
      type: Schema.ObjectId,
      ref: "Task"  
    }]
});

User.plugin(uniqueValidator, {message: 'Existing user with this email'})

module.exports = mongoose.model('User', User);
