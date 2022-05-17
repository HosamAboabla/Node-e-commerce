require('dotenv').config({path : 'doc_2022-03-26_21-27-21.env'});
const express = require("express");
const app = express();
const path = require('path');
const routes = require('./routes');
const keys = require('./config/keys');
const mongoose = require('mongoose');

// To handle form and json requrests
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cookieParser())     


app.use(routes);


const {database , port} = keys;


// connect to mongo database

mongoose.connect(database.url, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connect to mongo db successfully'))
  .catch(err => console.log(err));


// Serve static assets if in production
if (1) { //process.env.NODE_ENV === 'production'
  // Set static folder
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build' , 'index.html'));
  });
}

const server = app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});