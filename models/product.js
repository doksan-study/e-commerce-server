const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  // thumbnail: {
  // }
  description: {
    type: String,
  },
  cost: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
