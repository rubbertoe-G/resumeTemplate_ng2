const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const app = express();

//Middleware for CORS
app.use(cors());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist')));

//////////////////////////////API///////////////////////////////

// API files for interacting with MongoDB
const index = require('./routes/index');
const home = require('./routes/home');

// API locations
app.use('/', index);
app.use('/home', home)

// // Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//////////////////////////////API///////////////////////////////


//Set Port
const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`\nRunning on application on localhost:${port}`));

