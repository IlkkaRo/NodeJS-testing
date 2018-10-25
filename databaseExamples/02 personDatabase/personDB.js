'use strict';

const Database      = require('./database');
const sqlStatements = require('./sqlStatements');

const personDB = new Database({
  host          : 'localhost',
  port          : 3306,
  user          : 'saku',
  password      : 'secret',
  database      : 'persondatabase'
}, true);

const allSql = sqlStatements.getAllSql.join(' ');

personDB.doQuery(allSql)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
