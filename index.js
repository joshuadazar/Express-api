// Import the express library.
const express = require('express');

// Create a new express app.
const app = express();

// Create a new module to handle the /api/hello route.

const helloModule = require('./hello');
const users = require('./users');
const starWars = require('./starWars');
const jsonData = require('./jsonData');

const welcome = require('./welcome');

// Mount the helloModule on the app.
app.use('/api/hello', helloModule);
app.use('/api/users', users);
app.use('/sw', starWars);
app.use('/data', jsonData);
app.use('/rnd',(req, res)=> res.send(String(Math.floor(Math.random()*10))) )
app.use('', welcome);

// Start the server on port 3000.
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// The helloModule exports a function that handles GET requests to the /api/hello endpoint.
module.exports = helloModule;
