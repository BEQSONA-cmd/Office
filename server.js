const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = 
{
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
};

const server = http.createServer((req, res) => 
    {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => 
        {
        if (err) 
        {
            res.writeHead(404);
            res.end('Page not found');
        } 
        else 
        {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8080, () => 
{
    console.log('Server running at http://localhost:8080');
});
