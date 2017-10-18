module.exports = function(app) {
    app.get('/', function(req, res) {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);
        productsDao.list((error, result) => {
            res.render('home/index', {livros: result});    
        });
        connection.end();
    });
}