var path = require('path')
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var autores = require('./api/autores')
var livros = require('./api/livros')
var fotos = require('./api/fotos')
var login = require('./api/login')
var jwt = require('jsonwebtoken');

// Body parser to get data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static Files
app.use(express.static(path.join(__dirname, '../', 'my-react-app/build')));

// Cross Origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
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


const protectedRouter = express.Router(); 

protectedRouter.use((req, resp, next) => {
  const now = new Date();
  const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
  const path = `"${req.method} ${req.path}"`;
  const m = `${req.ip} - ${time} - ${path}`;
  console.log(m);
  next();
});

protectedRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

protectedRouter.use((req, res, next) => {
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, 'secret', function (err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.login = decoded.login;
      next();
  });
});



// API Routes
app.route('/api/autores')
  .get(autores.list)
  .post(autores.create);
app.route('/api/autores/:id')
  .get(autores.find)
  .put(autores.update)
  .delete(autores.delete)

app.route('/api/livros')
  .get(livros.list)
  .post(livros.create);
app.route('/api/livros/:id')
  .get(livros.find)
  .put(livros.update)
  .delete(livros.delete)

app.route('/api/login')
  .post(login.login)

app.route('/api/fotos/:login')
  .get(fotos.findByLoginUsuario)

protectedRouter.get('/api/fotos',fotos.findUserFriends)

app.use(protectedRouter);


// Start the server
app.listen('8000', () => {
  // eslint-disable-next-line no-console
  console.log('Local DevServer Started on port 8000...');
});

