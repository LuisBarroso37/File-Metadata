'use strict';

const express = require('express');
const cors = require('cors');
const fileRoute = require('./routes/file');
      
var app = express();

//Allows FreeCodeCamp to test the project
app.use(cors());

//Get file file.js
app.use(fileRoute);

//Apply css styles to html.file
app.use('/public', express.static(process.cwd() + '/public'));

//Send html file when the link to the webpage is entered
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

//Listen for requests
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
})

