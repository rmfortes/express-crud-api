const Word = require("./models/Word");
const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");

const app = express();
app.use(parser.json());


//? this route lists every object
app.get("/list", (req, res) => {
  Word.find({}).then((words) => {
    res.json(words);
  });
});

//this route lists a single object 
app.get('/list/:id', (req, res) => {
    Word.findById(req.params.id).then(words => {
        res.json(words);
    })
})

app.get('/list/word/:word', (req, res) => {
    Word.find({word: req.params.word}).then(words=>{
        res.json(words);
    })
})

//this route creates a new object 
// app.post("/", (req, res) => {
//   Word.find({}).then((words) => {
//     res.json(words);
//   });
// });

//this route updates an object 

//this route deletes an object. 

app.listen(4000, () => {
  console.log("Listening on 4000!");
});

// app.put(“/countries/:name”, (req, res) => {
//   Country.findOneAndUpdate({ name: req.params.name }, req.body, {
//     new: true,
//   }).then((country) => {
//     res.json(country);
//   });
// });
