const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let movie = new Schema({
    title: {type: String},
    genre: {type: String},
    date_added: {type: Date}
});


module.exports = mongoose.model("movie", movie);