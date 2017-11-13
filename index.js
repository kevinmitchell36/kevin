const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});

app.use(express.static(__dirname + '/public'))

