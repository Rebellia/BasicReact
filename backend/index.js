const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const movie = require("./movieModel");
const router = express.Router();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json


mongoose.connect("mongodb://127.0.0.1:27017/MovieDB", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

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
/* router.route("/insertMovie").post((request, response) => {
  console.log("DEBUG A");

  const newMovie = new movie({
    title: request.body.title,
    genre: request.body.genre,
    date_added: request.body.date_added
  });
  movie.insertOne(newMovie, (err, result) => {
    if (err) {
      console.log("DEBUG C");
      throw err;
      }
    console.log("DEBUG D");
    console.log("Successfully inserted a new movie!");
  });
}); */

router.post("/insertMovie", (req, res) => {
  console.log("I HAVE REQUESTED\n" + req.body);
  const newMovie = new movie(req.body);
  newMovie.save().then(item => {res.send("Item saved to the database");}).catch(err => {res.send("Unable to save to database");})
});


app.use("/", router);
app.listen(PORT, function() {
   console.log("Server is running on Port " + PORT) ;
});