const Word = require("./models/Word");
const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");

const app = express();
app.use(parser.json());


// this route lists every object
app.get("/list", (req, res) => {
  Word.find({}).then((words) => {
    res.json(words);
  });
});

//this route lists a single object by id search
app.get('/list/:id', (req, res) => {
    Word.findById(req.params.id).then(words => {
        res.json(words);
    })
})

//this route lists a single object by word search
app.get('/list/word/:word', (req, res) => {
    Word.find({word: req.params.word}).then(words=>{
        res.json(words);
    })
})

//this route creates a new object 
app.post("/list/", (req, res) => {
  Word.create(req.body).then(words=>{
      res.json(words);
  });
});

//this route updates an object 
app.put("/list/:id", function (req, res) {
    Word.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    ).then(words => {
      res.json(words)
    })
  })

//this route deletes an object. 
app.delete("/list/:id", function (req, res) {
    Word.findOneAndRemove({ _id: req.params.id })
      .then(words => {
        res.json(words)
      })
  })

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
