module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.list((error, result) => {
            res.format({
                html: function() {
                    res.render('products/list', {products: result});
                },
                json: function() {
                    res.json(result);
                }
            });
        });
        connection.end();
    });

    app.get('/products/form', (req, res) => {
        res.render("products/form", {errors: {}, product: {}});
    });

    app.post('/products', (req, res) => {
        let product = req.body;

        req.assert('title', 'Title is required').notEmpty();
        req.assert('price', 'Price is a number. Invalid value.').isFloat();

        let errors = req.validationErrors();
        if(errors) {
            res.render("products/form", {errors: errors, product: product});
            console.log(errors);
            return;
        }

        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.save(product, (error, result) => {
            res.redirect('/products');
        });
        connection.end();
    });
}