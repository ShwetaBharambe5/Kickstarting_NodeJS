const http = require('http');

const server = http.createServer((req, res) => {
  // Parse the URL
  const url = req.url;

  // Determine the response based on the URL
  if (url === '/home') {
    res.write('Welcome home');
  } else if (url === '/about') {
    res.write('Welcome to About Us page');
  } else if (url === '/node') {
    res.write('Welcome to my Node.js project');
  } else {
    // Catch-all for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
  }

  // Send the response
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
