const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Payment = require("../models/Payments");
const Cart = require("../models/Carts");
const ObjectId = mongoose.Types.ObjectId;

// token
const verifyToken = require("../middleware/verifyToken");

// post payment infform to db
router.post("/", verifyToken, async (req, res) => {
  const payment = req.body;
  try {
    const paymentRequest = await Payment.create(payment);
    // delete cart item after payment
    const cartIds = payment.cartItems.map((id) => new ObjectId(id));
    const deleteCartRequest = await Cart.deleteMeny({ _id: { $in: cartIds } }); // in method

    res.status(200).json(paymentRequest, deleteCartRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

});

router.get('/', verifyToken, async(req, res) => {
  const email = req.query.email;
  const query = {email: email}
    try{
       
        const decodedEmail = req.decoded.email;
        if(email !== decodedEmail){
            res.status(403).json({message: "Forbiden Access"})
        }
        const result = await Payment.find(query).sort({createdAt: -1}).exec();
        res.status(200).json(result)

    } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
