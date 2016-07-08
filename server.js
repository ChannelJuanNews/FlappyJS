/*we require express as our server*/
var express = require('express');
/*we require serve-favicon as our favicon deliverer (cause the browser is weird like that)*/
var favicon = require('serve-favicon');

/*we instantiate express as our http server*/
var app = express();

/*our middleware to server static assets and favicons*/
app.use(express.static( __dirname ));
app.use(favicon( __dirname + "/flappy.png" ));

/*we define a ROOT route so upon hitting flappy.ruelas.me we can respond with our main file*/
app.get('/', function(req, res) {
	res.sendFile('index.html');
});

/*we are listening on port 8083 cause thats how I roll*/
app.listen(8083, function() {
	console.log('listening on port 8083');
});
