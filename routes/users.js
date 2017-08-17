var express = require('express');
var router = express.Router();
var db = require('../models')



router.get('/', function(req, res) {
  db.User.findAll()
  .then(data_user =>{
    db.Movie.findAll()
    .then(data_movie =>{
      db.MovieUser.findAll()
      .then(data_rate =>{

        for(i=0; i<data_movie.length; i++)
        {
          var avg = 0;
          var count = 0
          data_movie[i].rating = 0;
          for(j=0; j<data_rate.length; j++)
          {
            if(data_movie[i].id == data_rate[j].MovieId)
            {
              count++
              data_movie[i].rating += data_rate[j].Rating
            }
          }
          data_movie[i].rating = Math.floor(data_movie[i].rating/count)
        }
        console.log("====>" + data_movie[0].rating +" "+data_movie[0].movie_name);
        res.render('listmovie', {users: data_user, movies : data_movie, rating:data_rate});
      })
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
  db.MovieUser.create({
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

router.post('/search', (req, res)=>{
  db.User.findAll()
  .then(data=>{
    db.Movie.findAll({
      where:{
        movie_name:{$like: `%${req.body.search}%`}
      }
    })
    .then(data2=>{
      res.render('result-search', {userData:data,movieName:data2})
    })
  })
})

router.get('/search/:idu/:idm',(req, res)=>{
  db.User.findAll({where:{id:`${req.params.idu}`}})
  .then((data)=>{
    db.Movie.findAll({where:{id:`${req.params.idm}`}})
    .then((data2)=>{
      res.render('rating', {users:data, movies:data2})
    })
  })
})

module.exports = router;
