module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.services.ConnectionFactory();

        connection.query("SELECT * FROM operadora", (error, result) => {
            res.render('products/list', {products: result});
        });

        connection.end();

        //res.render('products/list');
    });
}