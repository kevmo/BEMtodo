var application_root = __dirname,
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    PORT = 6969;

var app = express();

app.use(express.static(path.join(application_root, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(PORT, function(){
  console.log("Express listening on port %d in %s mode",
    PORT, app.settings.env);
});
