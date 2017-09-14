function ProductsDao(connection) {
    this._connection = connection;
}

ProductsDao.prototype.list = function (callback) {
    this._connection.query("SELECT * FROM products", callback);
}

ProductsDao.prototype.save = function (product, callback) {
    this._connection.query("INSERT INTO products SET ?", product, callback);
}

module.exports = function () {
    return ProductsDao;
}