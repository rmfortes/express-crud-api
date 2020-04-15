const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Words_Rhymes_API", {useNewUrlParser: true});

module.exports = mongoose;