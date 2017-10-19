var app = require('./config/express')();
var productsRoutes = require('./app/routes/products')(app);
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen('3000', () => {
    console.log("Server is running...");
})