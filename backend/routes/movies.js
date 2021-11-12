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

  router.route("/findMovie").get((req, res) => {
    console.log("I WANT TO FIND ", req.query.title);



    let findMovie = req.query.title;


    movie.find({title: findMovie}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

//function to post movies to the database
router.post("/insertMovie", (req, res) => {
    console.log('I HAVE REQUESTED TO ADD', JSON.stringify(req.body));
    const newMovie = new movie(req.body.movie);
    newMovie.save()
    .then(item => {res.send("Movie sucessfully saved to the database");})
    .catch(err => {res.send("Unable to save Movie to database" + err);})
  });

//Function to remove movies from the database
router.delete("/deleteMovie", (req, res) => {
  console.log("I HAVE REQUESTED TO DELETE " + JSON.stringify(req.body.title));
  const deletedMovie = req.body;
  movie.deleteOne(deletedMovie, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}); 




  module.exports = router;