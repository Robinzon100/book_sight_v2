const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// ─── CONSTOLLER IMPORTS ──────────────────────────────────────────────────────────────── 
const errorController = require('./controllers/error');
 


// ─── VIEW ENGINE ────────────────────────────────────────────────────────────────    
app.set('view engine', 'ejs');
app.set('views', 'views');

// ─── BODY PARSER ────────────────────────────────────────────────────────────────
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(express.static(path.join(__dirname, 'public')));
// ─── USING THE ROUTES ───────────────────────────────────────────────────────────
app.use(errorController.get404);
app.listen(3000);