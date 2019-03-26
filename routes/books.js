const express = require('express');
const router = express.Router();


// ─── CONSTOLERS ─────────────────────────────────────────────────────────────────
const booksController = require('../controllers/books');

// ─── SHOP ROUTES ────────────────────────────────────────────────────────────────    
//GET 
router.get('/books', booksController.getBooks);




module.exports = router;