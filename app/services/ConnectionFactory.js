let mysql = require('mysql');

module.exports = () => {
    return getConnection;
}

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'link'
    });
}
