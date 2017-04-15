const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//middlewares
app.use(morgan('dev'));
express.static(path.join(__dirname, '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./apiRoutes'));

// Send index.html for anything else.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//start server
app.listen(3000, function () {
  console.log("Your server, listening on port 3000");
});
