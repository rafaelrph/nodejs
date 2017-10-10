module.exports = (app) => {
    app.get('/products', (req, res, next) => {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);

        productsDao.list((error, result) => {
            if(error) {
                return next(error);
            }
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
            res.format({
                html: function() {
                    res.status(400).render("products/form", {errors: errors, product: product});
                },
                json: function() {
                    res.status(400).json(errors);
                }
            });
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