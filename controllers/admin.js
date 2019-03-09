const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(
    title,
    imageUrl,
    description,
    price
  );
  product.save();
  res.redirect('/');
};



exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  const productId = req.params.productId;
  Product.findById(productId, product =>{
    if (!product) {
      redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      product: product,
      editing: editMode
    });

  })
};



exports.getAdminProduct = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    console.log(products);
    res.render('admin/products', {
      prods: products,
      pageTitle: 'admin-products',
      path: '/admin/products'
    });
  });
};


