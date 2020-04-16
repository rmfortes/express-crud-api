const fetch = require("node-fetch");
const fs = require("fs");

// This variable allows you to store all the words you want make a Fetch call for
let wordBank = ["cute", "red", "bowl", "mouse", "cup"];

// Your forEach that allows you to fire off a Fetch call for each word in wordBank
wordBank.forEach((word) => {
  let URL = `https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`;

  fetch(URL, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "21ce870816msh4d291e4a787bc85p173d27jsn54bacf4c4513",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // Where you are writing the data to its own .json file
      console.log(response);

      let wordData = JSON.stringify(response);

      let word = response.word; // where in the object data response you'll find the actual word

      fs.writeFile(`./db/data/${word}.json`, wordData, (err) => {
        // 1st this runs filename = word1.json
        if (err) {
          console.log(err);
        } else {
          console.log("hello");
        }

        // err ? console.log(err) : console.log('success')
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
