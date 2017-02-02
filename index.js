/*##############################
  Variables:
##############################*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

/*##############################
  Middleware:
##############################*/

app.use(bodyParser.json());
app.use(middleware.addHeaders);

/*##############################
  Read-Only Endpoints:
##############################*/

//GET Endpoints:
app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/latestoccupation', mainCtrl.getLatestOccupation);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getGender);
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/api/skillz', mainCtrl.getSkillz);
app.get('/api/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

/*##############################
  Writeable Endpoints:
##############################*/

//PUT Endpoints:
app.put('/api/name', mainCtrl.putName);
// app.put('/api/:changeName/:nameTwo/:nameThree'); mainCtrl.changeName); //change name with params. Each /:fdsf sets new keys in the new object.
app.put('/api/location', mainCtrl.putName);

//POST Endpoints:
app.post('/api/hobbies', mainCtrl.postHobbies);
app.post('/api/occupations', mainCtrl.postHobbies);
app.post('/api/family', mainCtrl.postHobbies);
app.post('/api/restaurants', mainCtrl.postHobbies);
app.post('/api/skillz', middleware.generateId, mainCtrl.postSkillz);
// app.post('/api/addSomething', mainCtrl.addSomething);

/*##############################
  Listen:
##############################*/

app.listen(3000, function(){
  console.log('listening on port 3000')
});
