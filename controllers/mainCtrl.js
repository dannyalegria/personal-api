var user = require('../user.js');

module.exports = {

  getName: function (req, res, next){
    res.status(200).json({"name": user.name});
  },

  getLocation: function(req, res, next){
    res.status(200).json({"location": user.location});
  },

  getOccupations: function(req, res, next){
    var listOccupations = res.status(200).json({
      "occupations": user.occupations
    });
    if (req.query.order) {
      if (req.query.order === 'desc') {
        user.occupations.sort((a, b) => a < b ? 1 : -1);
        listOccupations;
      } else if (req.query.order === 'asc') {
        user.occupations.sort((a, b) => a > b ? 1 : -1);
        listOccupations;
      }
    } else {
      listOccupations;
    }
  },

  getLatestOccupation: function(req, res, next){
    res.status(200).json({"latestOccupation": user.occupations[user.occupations.length-1]});
  },

  getHobbies: function(req, res, next){
    res.status(200).json({"hobbies": user.hobbies});
  },

  getHobbiesType: function(req, res, next){
    var matchingHobby = user.hobbies.filter(
      val => val.type === req.params.type
    )
    res.status(200).json({"type": matchingHobby});
  },

  getFamily: function(req, res, next){
    res.status(200).json({"family": user.family});
  },

  getGender: function(req, res, next){
    var matchingGender = user.family.filter(
      val => val.gender === req.params.gender
    )
    res.status(200).json({"gender": matchingGender});
  },

  getRestaurants: function(req, res, next){
    if (req.query.rating){
      res.status(200).json(
        {"rating":
        user.restaurants.filter(
        val => val.rating > req.query.rating
        )
      })
    }
    res.status(200).json({"restaurants": user.restaurants});
  },

  getRestaurantsByName: function(req, res, next){
    var byName = user.restaurants.filter(
      val => val.name === req.params.name
    )
    res.status(200).json({"name": byName})
  }

  

}
