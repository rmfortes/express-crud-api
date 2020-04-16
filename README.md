# Rhymes API

This is a JSON API with full CRUD functionality that allows users to access a database of English-language words and their rhymes. 

# Technologies Used 

Express and Mongoose. 

# List of Features 

The Rhymes API allows you to search the database using two endpoints: id and word. 

# Sample Response 

```javascript 
{
    "rhymes": {
        "all": [
            "cog",
            "fog",
            "log"
        ]
    },
    "_id": "5e97d3806ec96c94d6fcc6a9",
    "word": "dog",
    "__v": 0
}
```

# CRUD: Create 

* **URL**

/list

* **Method**

`POST`

# CRUD: Read

* **URL to list all entries**

/list

* **URL to search for a single entry using id as the endpoint**

/list/:id

* **URL to search for a single entry using word as the endpoint**

/list/word/:word

* **Method**

`GET`

# CRUD: Update

* **URL**

/list/:id 

* **Method**

`PUT`

# CRUD: Delete

* **URL**

/list/:id

* **Method** 

`DELETE`

# Contribution Guidelines 

Should you identify any bugs or have any ideas for how to make code more scaleable (especially with regards to automating creation & importing of individual JSON files for each data entry), kindly submit a pull request on this project's GitHub repo. 

Link to repo: https://github.com/rmfortes/express-crud-api