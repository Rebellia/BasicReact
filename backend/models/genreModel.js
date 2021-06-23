const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let genre = new Schema({
    genre: {type: String, required: true}
});


module.exports = mongoose.model("genre", genre);