var express = require('express');
var dotenv = require("dotenv");
var path = require('path');
var cors = require('cors');
var footballRouter = require('./routes/index');

dotenv.config();
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// setup route path
app.use('/api/football', footballRouter);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
});
