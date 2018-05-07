//Updated
//const http = require('http');
//const fs = require('fs');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' +config.database);
});

mongoose.connection.on('error', (err) => {
	console.log('Database error: ' +err);
});

const app = express();
const users = require('C:/projects/routes/users');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

// set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);
//app.use(app.router);
//users.initialize(app);

//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () =>{
	console.log('Server started on port ' +port);
});

//module.exports = router;

//const hostname = '127.0.0.1';
//const port = 3000;
/*
fs.readFile('index.html', (err, html) =>{
	if(err){
		throw err;
	}

	const server = http.createServer((req,res) =>{
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
		//res.end('Hello World!');
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port ' + port);
	});


});
*/
