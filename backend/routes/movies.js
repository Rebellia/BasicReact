const router = require('express').Router();

const movie = require("../models/movieModel");

//Function to get movies from the database
router.route("/getMovies").get((req, res) => {
    movie.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });


//function to post movies to the database
router.post("/insertMovie", (req, res) => {
    console.log("I HAVE REQUESTED\n" + req.body);
    const newMovie = new movie(req.body);
    newMovie.save()
    .then(item => {res.send("Movie saved to the database");})
    .catch(err => {res.send("Unable to save Movie to database");})
  });


  module.exports = router;