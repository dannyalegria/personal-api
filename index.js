//Variables
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

//Middleware
app.use(bodyParser.json());
app.use(middleware.addHeaders);

//Read-Only Endpoints:

  //GET /name
  app.get('/name', mainCtrl.getName);
  //GET /location
  app.get('/location', mainCtrl.getLocation);
  //GET /occupations
  app.get('/occupations', mainCtrl.getOccupations);
  //GET /occupations/latest
  app.get('/latestoccupation', mainCtrl.getLatestOccupation);
  //GET /hobbies
  app.get('/hobbies', mainCtrl.getHobbies);
  //GET /hobbies/:type
  app.get('/hobbies/:type', mainCtrl.getHobbiesType);
  //GET /family
  app.get('/family', mainCtrl.getFamily);
  //GET /family/:gender
  app.get('/family/:gender', mainCtrl.getGender);
  //GET /restaurants
  app.get('/restaurants', mainCtrl.getRestaurants);
  //GET /restaurants/:name
  app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

//Writeable Endpoints:

  //PUT /name

  //PUT /location

  //POST /hobbies

  //POST /occupations

  //POST /family

  //POST /restaurants

//Listen
app.listen(3000, function(){
  console.log('listening on port 3000')
});
