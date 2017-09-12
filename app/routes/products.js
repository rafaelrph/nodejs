module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.lista((error, result) => {
            res.render('products/list', {products: result});
        });

        connection.end();
    });
}