let http = require('http');

let conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

let client = http.request(conf, function(response){
    response.on('data', function(body){
        console.log("" + body);
    });
});

let product = {
    title: "API test title",
    description: "Description API",
    price: 99.99
};

client.end(JSON.stringify(product));