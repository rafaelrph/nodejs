var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/products', (req, res) => {
    console.log("teste nodemon");
    res.render('products/list');
});

app.listen('3000', () => {
    console.log("Server is running...");
})