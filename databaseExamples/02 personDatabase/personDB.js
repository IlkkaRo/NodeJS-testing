'use strict';

const Database      = require('./database');
const sqlStatements = require('./sqlStatements');
const options       = require('./options');

const allSql = sqlStatements.getAllSql.join(' ');
const getPersonSql = sqlStatements.getPersonSql.join(' ');
// const insertSql = sqlStatements.insertPersonSql.join(' ');
// const deleteSql = sqlStatements.deletePersonSql.join(' ');
// const updateSql = sqlStatements.updatePersonSql.join(' ');

class PersonDatabase{
  constructor(options, debug=false) {
    this.personDB = new Database(options, debug);

  }
  getAll() {
    return new Promise(async (resolve, reject) =>{
      try{
        let result = await this.personDB.doQuery(allSql);
        resolve(result);
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
  get(personID) {
    return new Promise(async (resolve,reject) => {
      try {
        let result = await this.personDB.doQuery(getPersonSql, +personID);
        if(result.length===0) {
          reject(new Error('Person unknown'));
        }
        else {
          resolve(result[0]);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
} //end of class

module.exports  = function initDataStorage(debug=false) {
  return new PersonDatabase(options, debug);
};

function fatalError(err) {
  return new Error(`Sorry! Error error error! ${err.message}`);
}
