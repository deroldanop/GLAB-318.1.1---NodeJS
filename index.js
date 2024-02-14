// Importing required modules
const http = require('http');

// Define the port number
const PORT = 8080;

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if(req.url === "/"){
    res.write("No problem")
} else if(req.url === "/test"){
res.write("We have test here")
} else {
    res.statusCode = 404;
    res.write("Error: server cannot find the requested resource")
}
  // Sending a response
  res.end('Chao');
});



// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
