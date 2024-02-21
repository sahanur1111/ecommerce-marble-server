const mongoose = require("mongoose");
const { Schema } = mongoose;

// create schema object for Menu Items
const contactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  phone: Number,
  sub:String,
  detail:String
})

// create model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
