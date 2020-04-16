# Rhymes API

This is a JSON API with full CRUD functionality that allows users to access a database of English-language words and their rhymes. 

# Technologies Used 

Express and Mongoose. 

# List of Features 

The Rhymes API allows you to search the database using two endpoints: id and word. 

# CRUD: Create 

* **URL**

/list

* **Method**

`CREATE`

* **Sample**

```javascript
app.post("/list/", (req, res) => {
  Word.create(req.body).then((words) => {
    res.json(words);
  });
});
```





# Contribution Guidelines 

Should you identify any bugs, have any ideas for how to make code more scaleable (especially with regards to automating creation & importing of individual JSON files for each data entry), kindly submit a pull request on this project's GitHub repo. 

Link to repo: https://github.com/rmfortes/express-crud-api