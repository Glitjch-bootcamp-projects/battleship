const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');

const generateHelpers = require('./helpers/functions');
const { } = generateHelpers()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( { exteded: true } ));
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'session',
  keys: ['you stunk my battlehips', 'jambalaya is a good soul food', 'swatch it']
}));

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}...`);
});

//************Routes*********************/

app.get('/', (req, res) => {
  console.log("something is happening");
  res.send("Hello vorld")
// res.render('home')
});

app.get('*', (req, res) => {
  res.send('error 404');
  res.end();
});