const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  postNewProduct,
} = require("../services/ProductServices");

router.get("/products", async (req, res) => {
  await getAllProducts(req, res);
});

router.get("/product/:id", async (req, res) => {
  await getProductById(req, res);
});

router.post("/products", async (req, res) => {
  await postNewProduct(req, res);
});

module.exports = router;
