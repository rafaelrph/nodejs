module.exports = (app) => {
    app.get('/products', (req, res) => {
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'link'
        });

        connection.query("SELECT * FROM operadora", (error, result) => {
            res.render('products/list', {products: result});
        });

        connection.end();

        //res.render('products/list');
    });
}