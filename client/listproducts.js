let http = require('http');

let conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(conf, function(response){
    response.on('data', function(body) {
        console.log("" + body);
    })
});