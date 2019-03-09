const path = require('path');

const express = require('express');

const router = express.Router();


//─── CONTROLLERS ────────────────────────────────────────────────────────────────  
const adminController = require('../controllers/admin');


//─── ROUTES ─────────────────────────────────────────────────────────────────────
//GET
router.get('/products', adminController.getAdminProduct);
router.get('/add-product', adminController.getAddProduct);
//POST
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router; 
