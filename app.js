let app = require('./config/express')();
let productsRoutes = require('./app/routes/products')(app);

app.listen('3000', () => {
    console.log("Server is running...");
})