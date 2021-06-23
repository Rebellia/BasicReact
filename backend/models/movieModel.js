const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let movie = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    date_added: {type: Date, required: true}
});


module.exports = mongoose.model("movie", movie);