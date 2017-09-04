var app = require('./config/express')();
var productsRoutes = require('./app/routes/products')(app);

app.listen('3000', () => {
    console.log("Server is running...");
})