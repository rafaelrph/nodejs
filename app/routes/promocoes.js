module.exports = function(app) {
    app.get("/promocoes/form", function(req, res) {
        let connection = app.services.ConnectionFactory();
        let productsDao = new app.services.ProductsDao(connection);
        productsDao.list(function(erros, results) {
            res.render('promocoes/form', {lista: results});
        });
        connection.end();
    });

    app.post("/promocoes", function(req, res){
        let promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/form');
    });
}