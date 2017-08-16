var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/', function(req, res) {
  db.User.findAll()
  .then(data_user =>{
    db.Movie.findAll()
    .then(data_movie =>{
        res.render('listmovie', {users: data_user, movies : data_movie});
    })
  })
});


router.get('/rating/:idU/:idM', function(req,res) {
  db.User.findAll({where : {
    id : `${req.params.idU}`
  }})
  .then(data_user =>{
    db.Movie.findAll({where : {
      id : `${req.params.idM}`
    }})
    .then(data_movie =>{
      res.render('rating', {users : data_user, movies : data_movie})
    })
  })
})

router.post('/rating/:idU/:idM', function(req,res) {
  db.MovieUser.update({
    Rating: `${req.body.rating}`,
    UserId: `${req.params.idU}`,
    MovieId: `${req.params.idM}`
  },{
    where:{
      UserId: `${req.params.idU}`,
      MovieId: `${req.params.idM}`
    }
  })
  .then(() =>{
    res.redirect('/users')
  })
})
module.exports = router;