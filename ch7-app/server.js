var express = require('express');
var bodyParser = require('body-parser');
var server = express();

var DS = require( 'jps-ds' ).DS;
var _ds = new DS( {
	host: 'localhost/learning-yeoman',
	models: {
		'posts': { title: String, body: String, published: Boolean, created: Date}
	}
} );


server.use(bodyParser());
server.use(express.static(__dirname + '/app'));
server.use(function (req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

/*Base*/
server.get('/api', function (req, res) {
	res.json({message: 'RESTful Node API Server'});
});

/*Query*/
server.get('/api/:table', function (req, res) {

});

/* Create */
server.post('/api/:table', function (req, res) {
	res.json({
		message: 'Create item in ' + req.params.table
	});
});

/* Read */
server.get('/api/:table/:id?', function (req, res) {
	res.json({message: 'Read item ' + req.params.id + ' in ' + req.params.table});
});

/* Update */
server.put('/api/:table/:id', function (req, res) {
	res.json({message: 'Update item ' + req.params.id + ' in ' + req.params.table});
});

/* Delete */
server.delete('/api/:table/:id', function (req, res) {
	res.json({message: 'Delete item ' + req.params.id + ' in ' + req.params.table});
});



server.crud('/api/posts' ).on('create', function(table, data){
	_ds.create(table, data);
});




server.listen(9191);