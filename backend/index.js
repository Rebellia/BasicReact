const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const movie = require("./models/movieModel");
const router = express.Router();

app.use(cors());
app.use(express.json())

//Connect to Mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/MovieDB", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});




const moviesRouter = require("./routes/movies");
const genresRouter = require("./routes/genres");




app.use("/movies", moviesRouter);
app.use("/genres", genresRouter);
app.listen(PORT, function() {
   console.log("Server is running on Port " + PORT) ;
});