process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Mongoose= require('./config/mongoose'),
    express = require('./config/express'),
    Passport= require('./config/passport');

var db = Mongoose();
var app = express();
var passport= passport();
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');