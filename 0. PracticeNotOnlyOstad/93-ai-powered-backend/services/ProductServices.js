const ProductModel = require("../models/ProductModel");
const getAiDescription = require("./aiServices");

async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find();
    if (!products) {
      return res.send("No products found.");
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json("Server Error!");
  }
}

async function getProductById(req, res) {
  const id = req.params.id;
  try {
    const product = await ProductModel.findOne({
      _id: id,
    });
    if (!product) {
      return res.send("No product found.");
    }
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json("Server Error!");
  }
}

async function postNewProduct(req, res) {
  try {
    const b = req.body;
    const description = await getAiDescription(b.title, b.price, b.category);
    const newProduct = await ProductModel.create({
      title: b.title,
      price: b.price,
      category: b.category,
      description: description,
    });
    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json("Server Error!");
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
};
