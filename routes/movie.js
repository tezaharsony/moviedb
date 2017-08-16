const express = require('express');
const router = express.Router();
const db = require('../models')


//routing to show author
router.get('/', (req, res) => {
  db.Movie.findAll()
  .then(data_movie => {
    res.render('movies', {movies : data_movie})
  })
})

// //routing to show form addauthor
// router.get('/addmovies', (req, res, next) => {
//   db.Movie.findAll()
//   .then(data_movie => {
//     res.render('addmovies', {movie : data_movie})
//   })
// })
//
// //routing post to input database data input from form addauthor
// router.post('/addmovies', (req, res, next) => {
//   let movie_name = req.body.first_name
//   let release_year = req.body.last_name
//   let synopsis = req.body.synopsis
//   let producer = req.body.company
//   db.Movie.create({
//     'movie_name' : movie_name,
//     'release_year' : release_year,
//     'synopsis' : synopsis,
//     'producer' : producer
//   })
//   .then(data_movie => {
//     res.redirect('/movies')
//   })
// })
//
// //routing to edit data input from show author
// router.get('/edit/:id', (req, res, next) => {
//   let id = req.params.id
//   db.Movie.findById(id)
//   .then(data_movie => {
//     res.render('editmovies', {movie : data_movie})
//   })
// })
//
// //routing post to input database update data input from form editauthor
// router.post('/edit/:id', (req, res, next) => {
//   let movie_name = req.body.first_name
//   let release_year = req.body.last_name
//   let synopsis = req.body.synopsis
//   let producer = req.body.company
//   db.Movie.findById(id)
//   .then(data_movie => {
//     data_movie.update({
//       'movie_name' : movie_name,
//       'release_year' : release_year,
//       'synopsis' : synopsis,
//       'producer' : producer
//     })
//     .then(() => {
//       res.redirect('/movies')
//     })
//   })
// })
//
//
// //routing to delete author
// router.get('/delete/:id', (req, res, next) => {
//   let id = req.params.id
//   db.Movie.destroy({
//     where : {id :id}
//   })
//   .then(() => {
//     res.redirect('/movies')
//   })
// })



module.exports = router;