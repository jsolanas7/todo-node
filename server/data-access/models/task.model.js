const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let Task = new Schema({
    description:{
        type: String,
        required: [true, 'First name is required']
    },
    creationDate:{
        type: String,
        required: [true, 'Surname is required']
    },
    expirationDate:{
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    status:{
        type: String,
        enum: ['NEW','IN PROGRESS','COMPLETE','EXPIRED'],
        default: 'NEW'
    },
    user:{
        type: Schema.ObjectId,
        ref: "User"
    }
});


module.exports = mongoose.model('Task', Task);
