let mysql = require('mysql');

module.exports = () => {
    return getConnection;
}

function getConnection() {
    let db = 'node';
    if(process.env.NODE_ENV) {
        db = 'node_test';
    }

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: db
    });
}
