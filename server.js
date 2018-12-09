const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');
const data = require( path.resolve( __dirname, "./fighters.json" ) );



app.use('/', express.static(path.join( __dirname,  '/ufc')))
app.listen(port, () => console.log(`Application is listening on port: ${port}`))
	
app.get('/fighters/pettis', (req, res) => {
		res.json(data);
})
app.get('/fighters/dillshaw', (req, res) => {
	res.json(data);
})
app.get('/fighters/elkins', (req, res) => {
		res.json(data);
})
app.get('/fighters/mcgregor', (req, res) => {
	res.json(data);
})
app.get('/fighters/woodley', (req, res) => {
		res.json(data);
})
app.get('/fighters/whittaker', (req, res) => {
	res.json(data);
})
app.get('/fighters/rua', (req, res) => {
		res.json(data);
})
app.get('/fighters/overeem', (req, res) => {
	res.json(data);
})


/*
	WRITES API JSON RESPONSE INTO JSON FILE 

	fetch('http://ufc-data-api.ufc.com/api/v1/us/fighters/')
	.then(res => {
		return res.json();

	})
	.then(json => {                 
		fs.writeFile('fighters.json', JSON.stringify(json), 'utf-8', function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log("file was saved");
			}
		})

	})
	.catch(error => {
		console.log(error);
	})
	*/