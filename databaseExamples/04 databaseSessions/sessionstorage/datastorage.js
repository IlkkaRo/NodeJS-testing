'use strict';

const Database    = require('./database');
const fatalError  = err =>
  new Error(`Sorry! Error in application ${err.message}`);

const checkPasswordSql  =
  'Select role from User where username=? and userpassword=?';
const isAllowedSql      =
  'select username from User where username=(select username '+
  'from UserSession where sessionID=?) and role=?';
const insertSessionSql  =
  'insert into UserSession (sessionID, username) values(?,?)';
const deleteSessionSql  =
  'delete from UserSession where sessionID=?';
const hasSessionIDSql   =
  'select sessionID from UserSession where sessionID=?';
const getUsernameSql    =
  'select username from UserSession where sessionID=?';
const deleteUserSql     =
  'delete from UserSession where username=?';

module.exports = class SessionStorage {
  constructor(debug=false) {
    this.sessionDB = new Database ({
      'host'      : 'localhost',
      'port'      : 3306,
      'user'      : 'server',
      'password'  : 'secret',
      'database'  : 'sessionDB'
    }, debug);
  }

  checkPassword(username, userpassword) {
    return new Promise(async (resolve, reject) => {
      try{
        let result = await this.sessionDB.doQuery(checkPasswordSql, username, userpassword);
        resolve(result.length > 0);
      } catch(err) {
        reject(fatalError(err));
      }
    });
  }

  isAllowed(sessionID, role) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.sessionDB.doQuery(isAllowedSql, sessionID, role);
        resolve(result.length > 0);
      } catch(err) {
        reject(fatalError(err));
      }
    });
  }

  hasSessionID(sessionID) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.sessionDB.doQuery(hasSessionIDSql, sessionID);
        resolve(result.length > 0);
      } catch(err) {
        reject(fatalError(err));
      }
    });
  }

  addSession(sessionID, username) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await this.sessionDB.doQuery(insertSessionSql, sessionID, username);
        resolve(result.affectedCount > 0);
      } catch(err) {
        reject(fatalError(err));
      }
    });
  }

  removeUser(username) {
    return this.sessionDB.doQuery(deleteUserSql(username));
  }

  remove(sessionID) {
    return this.sessionDB.doQuery(deleteSessionSql, sessionID);
  }

  deleteSession(sessionID) {
    return this.sessionDB.doQuery(deleteSessionSql, sessionID);
  }

  getUser(sessionID) {
    return this.sessionDB.doQuery(getUsernameSql, sessionID);
  }
};
