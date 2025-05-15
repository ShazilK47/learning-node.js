const http = require('http');

console.log(http)

const server = http.createServer((req, res) => {
 console.log(req) 
 res.end('Hello World')
});

server.listen(3000, () => {
 console.log('server is running on port 3000')
})