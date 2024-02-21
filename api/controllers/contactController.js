const Contact = require("../models/Contact");


//get carts using email
const getContactByEmail = async (req, res) => {
    try {
      const email = req.query.email;
      const query = { email: email };
      const result = await Carts.find(query).exec();
      res.status(200).json(result); // akne ami dara send korte vule gac^ilam
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  module.exports = {
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getsingleCart,
    getContactByEmail
  };