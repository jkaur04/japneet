//
// # SimpleServer
//
// A simple chat server using Express
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var Post = require('./models/Post.js');



//var async = require('async');
//var socketio = require('socket.io');


//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router)
mongoose.connect('mongodb://jap_user245:conestoga123@ds161021.mlab.com:61021/posts');

router.use(express.static(path.resolve(__dirname, 'client')));


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

var post = new Post({ 
  image: './img/glyphicons-halflings-white.png',
  comment: 'cool glphicon',
  likeCount: 0,
  feedbackCount: 0
});
//and then saves it to the mongodb instance we connected to above
post.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('posted');
  }
});
