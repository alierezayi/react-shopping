import db from "../../utils/db";
import Product from "../../models/product";
import products from "../../data/products";

const handler = async (req, res) => {
  await db.connect();

  await Product.deleteMany();

  await Product.insertMany(products);

  res.send({ message: "products added." });
};

export default handler;
