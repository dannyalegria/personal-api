/*##############################
  Require Database:
##############################*/

var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

/*##############################
  Exports:
##############################*/

module.exports = {

  /*##############################
    Read-Only Functions:
  ##############################*/

  //GET Functions:

  getName(req, res, next){
    res.status(200).json({"name": user.name});
  },

  getLocation(req, res, next){
    res.status(200).json({"location": user.location});
  },

  getOccupations(req, res, next){
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

  getLatestOccupation(req, res, next){
    res.status(200).json({"latestOccupation": user.occupations[user.occupations.length-1]});
  },

  getHobbies(req, res, next){
    res.status(200).json({"hobbies": user.hobbies});
  },

  getHobbiesType(req, res, next){
    var matchingHobby = user.hobbies.filter(
      val => val.type === req.params.type
    )
    res.status(200).json({"type": matchingHobby});
  },

  getFamily(req, res, next){
    res.status(200).json({"family": user.family});
  },

  getGender(req, res, next){
    var matchingGender = user.family.filter(
      val => val.gender === req.params.gender
    )
    res.status(200).json({"gender": matchingGender});
  },

  getRestaurants(req, res, next){
    // if (req.query.rating){
    //   res.status(200).json(
    //     {"rating":
    //     user.restaurants.filter(
    //     val => val.rating > req.query.rating
    //     )
    //   })
    // }
    // res.status(200).json({"restaurants": user.restaurants});
    req.query.rating ?
    (res.status(200).json(
      {"rating":
      user.restaurants.filter
      (val => val.rating > req.query.rating)}
      )) : (res.status(200).json({"restaurants": user.restaurants}))

  },

  getRestaurantsByName(req, res, next){
    var byName = user.restaurants.filter(
      val => val.name === req.params.name
    )
    res.status(200).json({"name": byName})
  },

  getSkillz(req, res, next){
    req.query.experience ?
    (res.status(200).json(
    {"experience": skillz.filter
    (val => val.experience === req.query.experience)}
    )) : (res.status(200).json(skillz));
  },

  getSecrets(req, res, next){
    res.status(200).json(secrets);
  },

  /*##############################
    Writeable Functions:
  ##############################*/

  //PUT Functions:

  putName(req, res, next){
    user.name = req.body.name;
    res.status(200).send("ok");
  },

  //Change name with params:
  // changeName(req, res, next){
  //   console.log(req.params);
  //   user.name = req.params;
  //   res.status(501).send("ok")
  // }

  putLocation(req, res, next){
    user.location = req.body.location;
    res.status(200).send("ok");
  },

  //POST Functions:

  postHobbies(req, res, next){
    user.hobbies.push(req.body);
    res.status(200).send("ok");
  },

  postOccupations(req, res, next){
   user.occupations.push(req.body);
   res.status(200).send("ok");
  },

  postFamily(req, res, next){
   user.family.push(req.body);
   res.status(200).send("ok");
  },

  postRestaurants(req, res, next){
   user.restaurants.push(req.body);
   res.status(200).send("ok");
 },

  postSkillz(req, res, next){
   skillz.push(req.body);
   res.status(200).send("ok");
 }

 // addSomething(req, res, next){
 //   console.log(req.query);
 //   user.hobbies.push({name: req.query.name, type: req.query.type});
 //   res.status(200).send("ok");
 // }
 
}
