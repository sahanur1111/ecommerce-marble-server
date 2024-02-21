// const express = require("express");
// const app = express();
// const cors = require("cors");
// const port = process.env.PORT || 6001;
// require("dotenv").config();
// // const mongoose = require('mongoose');
// // console.log(process.env.DB_USER)

// //middleware
// app.use(cors());
// app.use(express.json());

// //mongo db config

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@marble.iavdprh.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     //database & collection
//     const menuCollections = client.db("marble-db").collection("menus");
//     const cartCollections = client.db("marble-db").collection("cartItems");

//     // all menu items operations
//     app.get("/menu", async (req, res) => {
//       const result = await menuCollections.find().toArray();
//       res.send(result);
//     });

//     //all carts operations
//     //POSTin the cart to db
//     app.post("/carts", async (req, res) => {
//       const cartItem = req.body;
//       const result = await cartCollections.insertOne(cartItem);
//       res.send(result);
//     });

//     // GET carts using email
//     app.get("/carts", async (req, res) => {
//       const email = req.query.email;
//       const filter = { email: email };
//       const result = await cartCollections.find(filter).toArray();
//       res.send(result);
//     });

//     // Get specific carts
//     app.get("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollections.findOne(filter);
//       res.send(result);
//     });

//     // Delete items from cart
//     app.delete("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollections.deleteOne(filter);
//       res.send(result);
//     });

//     // update carts quantity
//     app.put("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const { quantity } = req.body;
//       const filter = { _id: new ObjectId(id) };
//       const options = { upsert: true };

//       const updateDoc = {
//         $set: {
//           quantity: parseInt(quantity, 10),
//         },
//       };
//       const result = await cartCollections.updateOne(filter, updateDoc, options);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World I love you!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
