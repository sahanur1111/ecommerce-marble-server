const mongoose = require('mongoose')
const {Schema} = mongoose;

// schema model
const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        trim: true,
        minlength: 3
    },
    phone:{
        type:Number,
        trim:true,
        minlength:10
    },
    address:String,
    photoURL:String,
    role: {
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

// create a model instance
const User = mongoose.model('User', userSchema);

module.exports = User;