var path = require('path')
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var autores = require('./api/autores')

// Body parser to get data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static Files
app.use(express.static(path.join(__dirname, '../', 'my-react-app/build')));

// Cross Origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Logging on console for each request
app.use((req, resp, next) => {
  const now = new Date();
  const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
  const path = `"${req.method} ${req.path}"`;
  const m = `${req.ip} - ${time} - ${path}`;
  console.log(m);
  next();
});

// API Routes
app.get('/api/autores', autores.list);


// Start the server
app.listen('8000', () => {
  // eslint-disable-next-line no-console
  console.log('Local DevServer Started on port 8000...');
});
