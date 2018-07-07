var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware ={
  requireAuthentication: function(req, res, next){
  console.log('private route hit!');
  next();
  },
  logger: function (req, res, next){
    console.log('Request:' +new Date().toString() + '' + req.method + '' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);

app.get('/about', function(req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
// console.log( );

app.listen(PORT,function(){
  console.log('express server start on port!' +  PORT );
}); 