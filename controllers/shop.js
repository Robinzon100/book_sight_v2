const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};



exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    // prods: cartProductsId,
    // products: cartProducts,
    pageTitle: "cart",
    path: "/cart"
  });
};



exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};



exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "orders",
    path: "/orders"
  });
};



exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product);

    res.render("shop/product-detale", {
      product: product,
      pageTitle: "product-detale",
      path: "/product-detale"
    });
  });
};



exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "checkout",
    path: "/checkout"
  });
};



// exports.getCart = (req, res, next) => {
//   cartProductsId = [];
//   Cart.getProducts(products => {
//     console.log(products)
//     products.products.forEach(element => {
//       cartProductsId.push(element.id) ;
//     })
//     Product.findById(cartProductsId[0], cartProducts =>{
//       console.log(cartProductsId)
//       res.render('shop/cart', {
//         prods: cartProductsId,
//         products: cartProducts,
//         pageTitle: 'cart',
//         path: '/cart'
//       });
//     })
//   })
// };
