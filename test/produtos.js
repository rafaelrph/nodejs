var http = require('http');
var assert = require('assert');

describe('#ProdutosController', function() {
    it('listagem json', function(done) {
        let conf = {
            hostname: 'localhost',
            port: 3000,
            path: '/products',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(conf, function(res){
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json;charset=utf-8');
            done();
        });
    });
});