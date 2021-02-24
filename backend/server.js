import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  res.status(200).json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `the server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
