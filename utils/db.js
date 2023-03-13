import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://im1bitcode:VJCKryqD58R9mrFV@cluster0.q2bwqld.mongodb.net/?retryWrites=true&w=majority/shopping"
  );
  console.log("Connected.");
};

const db = { connect };
export default db;

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://im1bitcode:<password>@cluster0.q2bwqld.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
