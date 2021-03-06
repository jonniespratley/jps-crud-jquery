/*
 * RestCrud
 * user/repo
 *
 * Copyright (c) 2014 Jonnie Spratley
 * Licensed under the MIT license.
 */

'use strict';
var RestCrud, server, events, utils, express, bodyParser;


express = require( 'express' );
bodyParser = require( 'body-parser' );
utils = require("util");
events = require("events");


RestCrud = function () {
	var self = this;

	server = express();
	server.use( bodyParser() );
	server.use( express.static( __dirname + '/' ) );
	server.use( function (req, res, next) {
		console.log( '%s %s', req.method, req.url );
		next();
	} );

	/*Base*/
	server.get( '/api', function (req, res) {
		res.json( {message: 'RESTful Node API Server'} );
	} );

	/*Query*/
	server.get( '/api/:table', function (req, res) {
		res.json( {message: 'Query items in ' + req.params.table} );
		self.emit("query", {table: req.params.table});

	} );

	/* Create */
	server.post( '/api/:table', function (req, res) {
		var data = {
			message: 'Create item in ' + req.params.table
		};
		console.log(data);
		res.json( data );
		self.emit("create", {table: req.params.table});
	} );

	/* Read */
	server.get( '/api/:table/:id?', function (req, res) {
		var data = {message: 'Read item ' + req.params.id + ' in ' + req.params.table};
		console.log(data);
		res.json( data );
	} );

	/* Update */
	server.put( '/api/:table/:id', function (req, res) {
		res.json( {message: 'Update item ' + req.params.id + ' in ' + req.params.table} );
	} );

	/* Delete */
	server.delete( '/api/:table/:id', function (req, res) {
		res.json( {message: 'Delete item ' + req.params.id + ' in ' + req.params.table} );
	} );

	return server;
};



utils.inherits(RestCrud, events.EventEmitter);

exports.RestCrud = RestCrud;
