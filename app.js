var express = require('express');
var app = express();

app.get('/products', (req, res) => {
    res.send("<html><head></head><body>List of products Express</body></html>");
});

app.listen('3000', () => {
    console.log("Server is running...");
})