'use strict'; //160

const http        = require('http');
const path        = require('path');
const express     = require('express');
const session     = require('express-session');
const bcrypt      = require('bcryptjs');
const MySQLStore  = require('express-mysql-session')(session);

const app   = express();

app.use(express.urlencoded({extended:false}));

const durationMin   = min => 60000*min;

const storageOptions  = {
  host  : 'localhost',
  port  : 3306,
  user  : 'server',
  password  : 'secret',
  database  : 'sessionDB',
  checkExpirationInterval : durationMin(2),
  expiration              : durationMin(5)
};

const mysqlSessionStore = new MySQLStore(storageOptions);

const port    = process.env.PORT || 3000;
const host    = '127.0.0.1';
const server  = http.createServer(app);

const SessionStorage  = require('./sessionstorage/datastorage');
const sessionStorage  = new SessionStorage(true);

const getterRouter  = require(path.join(__dirname,'routes','getters.js'));
const loginRouter   = require(path.join(__dirname,'routes','login.js'));
const logoutRouter  = require(path.join(__dirname,'routes','logout.js'));

app.use('/styles',express.static(path.join(__dirname,'styles')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pageviews'));

var salt      = bcrypt.genSaltSync(10);
let password  = new Date().toString();
var hash      = bcrypt.hashSynch(password, salt);

app.use(session({
  secret  : process.env.SECRET || hash,
  resave  : false,
  saveUninitialized : true,
  store             : mysqlSessionStore
}));

app.use(getterRouter(sessionStorage));
app.use(loginRouter(sessionStorage));
app.use(logoutRouter(sessionStorage));

server.listen(port, host, () =>
  /* eslint-disable no-console*/
  console.log(`Server ${host} at port ${port}.`)
  /* eslint-enable no-console*/
);
