 var application_root = __dirname,
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    mongoose = require('mongoose'),
    PORT = 6969;

var app = express();

mongoose.connect('mongodb://localhost/library_database');

// SCHEMAS
// -------------------------------

var Book = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date
});

var BookModel = mongoose.model("Book", Book);

// CONFIGURATION
// --------------------------------

// where to serve static content
app.use(express.static(path.join(application_root)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride() );
app.use( errorHandler({
  dumpExceptions: true,
  showStack: true
}))

// ROUTES
// -------------------------------

app.get('/api', function(req, res){
  res.send("Librrrury is runnin!");
});


// FIRE ZE MISSILES
// -------------------------------
app.listen(PORT, function(){
  console.log("Express listening on port %d in %s mode",
    PORT, app.settings.env);
});


