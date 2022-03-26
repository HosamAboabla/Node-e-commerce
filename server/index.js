require('dotenv').config();
const express = require("express");
const app = express();

const routes = require('./routes');
const keys = require('./config/keys');
const mongoose = require('mongoose');

// To handle form and json requrests
app.use(express.urlencoded({ extended : true }));
app.use(express.json());


app.use(routes);


const {database , port} = keys;


// connect to mongo database

mongoose.connect(database.url, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connect to mongo db successfully'))
  .catch(err => console.log(err));


const server = app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});