var express = require('../config/express')();
var request = require('supertest')(express);

process.env.NODE_ENV = 'test';

describe('#ProdutosController', function() {
    beforeEach(function(done) {
        let connection = express.services.ConnectionFactory();
        connection.query("DELETE FROM products", function(exc, result) {
            if(!exc) {
                done();
            }
        });
    });

    it('#list api json', function(done) {
        request.get('/products')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done);            
    });

    it('#save product - invalid data', function(done) {
        request.post('/products')
        .send({title: "", description: "description product"})
        .expect(400, done);
    });

    it("#save valid product", function(done) {
        request.post('/products')
        .send({title: "title of product", description: "description 2", price: 100.50})
        .expect(302, done);
    });
});