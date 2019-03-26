const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getBooks = (req, res, next) => {
  res.render("books.ejs", {
    pageTitle: "books",
    path: "/books"
  });
};
