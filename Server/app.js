require('dotenv').config();

var express = require('express'); 
var app = express();
var color = require('./Controllers/colorcontroller');
var user = require('./Controllers/usercontroller');

var sequelize = require('./db');
var bodyParser = require('body-parser');
sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

// Routes //
app.use('/user', user);
app.use('/color', color);

app.listen(3000, function(){
    console.log('Hey man!!!')

});
