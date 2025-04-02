/*
This is a test script that makes a POST request to a local Node.js/Express server running on port 3000.
It sends a JSON payload with a value of 18 to the root endpoint (/).

The script:
1. Creates an HTTP request with POST method and JSON content type
2. Sets up event handlers to collect the response data
3. Sends the request with a JSON body containing {value: 18}
4. Logs the response status code and data

This is typically used to test the POST endpoint of a REST API server.
*/

const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.write(JSON.stringify({ value: 18 }));
req.end(); 