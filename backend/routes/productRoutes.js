import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

import Product from "../model/productModel.js";

// @ desc    Fetch All Products
// @ route   GET /api/products
// @ access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

// @ desc    Fetch Product
// @ route   GET /api/products/:id
// @ access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
