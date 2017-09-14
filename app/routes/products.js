module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.list((error, result) => {
            res.render('products/list', {products: result});
        });
        connection.end();
    });

    app.get('/products/form', (req, res) => {
        res.render("products/form");
    });

    app.post('/products', (req, res) => {
        let product = req.body;
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.save(product, (error, result) => {
            res.redirect('/products');
        });
        connection.end();
    });
}