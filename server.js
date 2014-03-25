#!/bin/env node

var express = require('express'),
    fs      = require('fs'),
    app, 
    server


// Create "express" server.
app = express();

app.use(express.static(__dirname + '/'))

// Handler for GET /
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
})

server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port)
})
