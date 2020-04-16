const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const Word = new Schema({
  word: String,
  rhymes: {
    all: [String],
  },
});

module.exports = mongoose.model("Word", Word);
