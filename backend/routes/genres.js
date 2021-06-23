const router = require('express').Router();

const genre = require("../models/genreModel");

//Function to get genres from the database
router.route("/getGenre").get((req, res) => {
    genre.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });


//function to post genres to the database
router.post("/insertGenre", (req, res) => {
    console.log("I HAVE REQUESTED\n" + req.body);
    const newGenre = new movie(req.body);
    newGenre.save()
    .then(item => {res.send("Genre saved to the database");})
    .catch(err => {res.json('ERROR: ' + err)})
  });


  module.exports = router;