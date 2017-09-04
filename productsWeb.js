let http = require('http');
let server = http.createServer((request, response) => {
    response.end("<html><head></head><body>List of products</body></html>");
});
server.listen(3000);

console.log('Server is running...');