'use strict';
/*eslint-disable no-console*/

const statements  = require('./createStatements');

try{
  createDatabase(statements);
}
catch(err) {
  console.log(err.message);
}

function createDatabase(createStatements) {
  const createOptions = {
    host      : createStatements.host,
    port      : createStatements.port,
    user      : createStatements.admin,
    password  : createStatements.adminpassword
  };

  let dropDatabaseSql = `DROP database if exists ${createStatements.database}`;
  let createDatabaseSql = `CREATE database ${createStatements.database}`;

}
