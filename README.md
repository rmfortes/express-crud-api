# Rhymes API

This is a JSON API with full CRUD functionality that allows users to access a database of English-language words and their rhymes. 

# List of Features 

The Rhymes API allows you to search the database using two endpoints: id and word. 

# Technologies Used 

Express and Mongoose. 

# CRUD: Create 

* **URL**

/list

* **Method**

`POST`

* **Example Response**

```javascript
{
    "rhymes": {
        "all": []
    },
    "word": ""
    "_id": "5e9897f0d23fc99d3a547657",
    "__v": 0
}
```

# CRUD: Read

* **URL to list all entries**

/list

* **URL to search for a single entry using id as the endpoint**

/list/:id

* **Method**

`GET`

* **Example URL**

/list/5e97d3806ec96c94d6fcc6a9

* **URL to search for a single entry using word as the endpoint**

/list/word/:word

* **Example URL**

/list/word/dog

* **Sample Response**

```javascript
{
    "rhymes": {
        "all": [
            "cog",
            "fog",
            "log",
            "hog",
            "clog",
            "frog"
        ]
    },
    "_id": "5e97d3806ec96c94d6fcc6a9",
    "word": "dog",
    "__v": 0
}
```


# CRUD: Update

* **URL**

/list/:id 

* **Method**

`PUT`

* **Example URL**

list/5e9897f0d23fc99d3a547657

* **Example Input**

```javascript
{
    "rhymes": {
        "all": ["care", "fair", "stare"]
    },
    "word": "hair"
    "_id": "5e9897f0d23fc99d3a547657",
    "__v": 0
}
```

# CRUD: Delete

* **URL**

/list/:id

* **Method** 

`DELETE`

* **Example URL**

list/5e9897f0d23fc99d3a547657

# Contribution Guidelines 

Should you identify any bugs or have any ideas for how to make code more scaleable (especially with regards to automating creation & importing of individual JSON files for each data entry), kindly submit a pull request on this project's GitHub repo. 

Link to repo: https://github.com/rmfortes/express-crud-api