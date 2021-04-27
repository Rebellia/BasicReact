const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const mongoose = require("mongoose");
let movie = require("./movieModel");
const router = express.Router();

app.use(cors())


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
      console.log("DEBUG: B");
      res.send(err);
    } else {
      console.log("DEBUG: C", result);
      res.send(result);
    }
  });
});

//function to post movies to the database
/* router.route("/InsertMovies").post((req, res) => {
  movie.insertOne(myNewMovie, (err, result) => {
    if (err) throw err;
    console.log("1 document inserted");
    res.send(result);
  });
}); */


app.use("/", router);
app.listen(PORT, function() {
   console.log("Server is running on Port " + PORT) ;
});