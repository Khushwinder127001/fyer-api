const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set your desired port number

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define a route that responds with "Hello, World!" when accessed
app.get('/api', (req, res) => {
    res.send('Hello, World!');
  });
  
  // You can add more routes and middleware here
  