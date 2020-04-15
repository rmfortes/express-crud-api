let data = require("./data.js");
const Word = require("../models/Word.js");
let allData = require("./data/masterJSON.json");

Word.deleteMany({}).then(() => {
  Word.create(allData)
    .then((rhymes) => console.log(rhymes))
    .catch((err) => console.log(err));
});
