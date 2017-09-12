function ProductsDao(connection) {
    this._connection = connection;
}

ProductsDao.prototype.lista = function (callback) {
    this._connection.query("SELECT * FROM operadora", callback);
}

module.exports = function () {
    return ProductsDao;
}