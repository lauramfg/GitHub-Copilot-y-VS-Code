// Create web server with Node.js
// 1. Create a web server object by including http module
// 2. Include url module to parse url
// 3. Create a server object
// 4. Read the file and return the content to the client
// 5. Write the response header
// 6. Write the content to the client
// 7. Listen to the port 8080

// 1. Create a web server object by including http module
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2. Include url module to parse url
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

// 3. Create a server object
http.createServer(function (req, res) {
    // 4. Read the file and return the content to the client
    fs.readFile('comments.html', function (err, data) {
        // 5. Write the response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // 6. Write the content to the client
        res.write(data);
        // 7. Listen to the port 8080
        return res.end();
    });
}).listen(8080);

