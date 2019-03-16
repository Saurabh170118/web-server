  // Install Express server
  const express = require('express');
  const path =require('path');

  const app = express();

  //Serve only the static file from the dist directory
  //replace the '/dist/<to_your_project-name>'

  app.use(express.static(__dirname + '/dist/angular-deploy'));


  app.get('*',function(req,res){
  
//Replace the '/dist/<to_your_project-name>/index.html'
res.sendFile(path.join(__dirname+ '/dist/angular-deploy/index.html'));
  });

  //Start the app by listenining on the default Heroku port

  app.listen(process.env.Port || 8000);