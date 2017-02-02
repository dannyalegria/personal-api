var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {

  addHeaders: function(req, res, next){
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },

  //QUESTION: How to make the id appear as first key on object?

  generateId: function(req, res, next){
    req.body.id = skillz.length + 1;
    next();
  },

  verifyUser: function(req, res, next){
    let r = req.params;
    r.username == "gary" && r.pin == 6969 ?
    next() : res.status(401).send("no");
    }
};
