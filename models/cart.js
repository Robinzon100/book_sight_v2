const fs = require('fs');
const path = require('path');

const dir = require('../util/path');

const p = path.join(dir, 'data', 'cart.json');

module.exports = class Cart {


    static getProducts(cb){
        fs.readFile(p, (err, filecontent) =>{
            const cart = JSON.parse(filecontent);
            cb(cart); 
        })
    }

    static addProduct(id, productPrice) {
        //fetch the previous cart
        fs.readFile(p, (err, filecontent) => {
            let cart = {
                products: [],
                totalPrice: 0
            };
            if (!err) {
                cart = JSON.parse(filecontent)
            }

            //analyze the cart => find existing product
            const exitsiningProductIndex = cart.products.findIndex(p => p.id === id);
            let exitsiningProduct = cart.products[exitsiningProductIndex];
            let updatedProduct;


            // add new product/ increase quantity
            if (exitsiningProduct) {
                updatedProduct = {...exitsiningProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[exitsiningProductIndex] = updatedProduct;
            } else {
                updatedProduct = {
                    id: id,
                    qty: 1
                };
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });

    } 






}