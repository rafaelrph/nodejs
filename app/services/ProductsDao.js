module.exports = function () {
    return function(connection) {
        this.lista = function (callback) {
            connection.query("SELECT * FROM operadora", callback);
        }
        return this;
    }
}