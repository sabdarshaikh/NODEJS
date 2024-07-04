import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  
    // res.end('Hello World!');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end(JSON.stringify({message: 'Server Error'}))

    try {

        if  (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Home Page</h1>')
            } else if(req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>ABOUT</h1>')
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>PAGE NOT FOUND</h1>')
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server error');
    }
   
});

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})