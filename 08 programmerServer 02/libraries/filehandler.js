'use strict';
//load necessary node modules
const fs=require('fs'); //for reading files fron filesystem

function read(filepath, encoding) {
  return new Promise((resolve, reject)=>{
    fs.readFile(filepath, encoding, (err, data)=>{
      if(err){
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}

const sendFile=function(res, filepath, options={type:'text/html', encoding:'utf8'}){
  read(filepath, options.encoding)
    .then(data=>{
      res.writeHead(200, {'content-type':options.type,'content-length':data.length});
      res.end(data,options.encoding);
    })
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
};

function readJson(filepath) {
  return read(filepath,'utf8');
}

module.exports={
  sendFile,
  readJson
};
