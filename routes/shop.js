const path = require('path');
const express = require('express');

const router = express.Router();


// ─── CONSTOLERS ─────────────────────────────────────────────────────────────────
const shopController = require('../controllers/shop');

// ─── SHOP ROUTES ────────────────────────────────────────────────────────────────    
//GET 
router.get('/', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);




module.exports = router;