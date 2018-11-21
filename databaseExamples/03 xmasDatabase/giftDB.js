'use strict';

const Database      = require('./database');
const sqlStatements = require('./sqlStatements');
const options       = require('./options');

const allSql        = sqlStatements.getAllSql.join(' ');
const getGiftSql    = sqlStatements.getGiftSql.join(' ');
const insertSql     = sqlStatements.insertGiftSql.join(' ');
const deleteSql     = sqlStatements.deleteGiftSql.join(' ');

class GiftDatabase{
  constructor(options, debug=false){
    this.giftDB=new Database(options, debug);
  }
  getAll() {
    return new Promise(async (resolve, reject)=>{
      try{
        let result = await this.giftDB.doQuery(allSql);
        resolve(result);
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
  get(giftID) {
    return new Promise(async (resolve,reject)=>{
      try{
        let result= await this.giftDB.doQuery(getGiftSql, +giftID);
        if(result.length===0) {
          reject(new Error('Gift unknown'));
        }
        else {
          resolve(result[0]);
        }
      }
      catch(err){
        reject(fatalError(err));
      }
    });
  }

  insert(gift) {
    return new Promise( async (resolve,reject)=>{
      try{
        let result= await this.giftDB.doQuery(insertSql,
          +gift.giftID,
          gift.firstname,
          gift.giftname,
          +gift.price
        );
        if(result.affectedRows===0) {
          reject(new Error('No gift was added'));
        }
        else{
          resolve(`Gift with id ${gift.giftID} was added`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
  delete(giftID) {
    return new Promise( async (resolve, reject)=>{
      try{
        let result = await this.giftDB.doQuery(deleteSql, +giftID);
        if(result.affectedRows===0) {
          reject(new Error(`No gift with given ID ${giftID}. Nothing deleted.`));
        }
        else {
          resolve(`Gift with ID ${giftID} was deleted.`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
} //end of class

module.exports=function initDataStorage(debug=false) {
  return new GiftDatabase(options, debug);
};

function fatalError(err) {
  return new Error(`Sorry! Error in our program. ${err.message}`);
}
