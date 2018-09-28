'use strict';

const fs = require('fs');
const path = require('path');

function read(filepath, encoding) {
  return new Promise ((resolve, reject)=> {
    fs.readFile(filepath, encoding, (err,data)=> {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const sendFile = function(res, filepath,
  options={
    type:'text/html',
    encoding:'utf8'
  }){
  read(filepath, options.encoding)
    .then(data => {
      res.writeHead(200, {
        'content-type':options.type,
        'content-length':data.length
      });
      res.end(data, options.encoding);
    })
    .catch(err=> {
      res.setStatusCode=404;
      res.end(err.message);
    });
};

const sendJson=(res, dude)=> {
  read(path.join(__dirname, 'duDes.json'), 'utf8')
    .then(data=>JSON.parse(data))
    .then(duDes=> {
      if(Object.keys(duDes).includes(dude)) {
        res.writeHead(200, {'content-type':'application/json'});
        res.end(JSON.stringify(duDes[dude]));
      }
    })
    .catch(err=>{res.setStatusCode=404;
      res.end(err.message);
    });
};

const sendDudes = res => {
  read(path.join(__dirname, 'duDes.json'), 'utf8')
    .then(data=>JSON.parse(data))
    .then(duDes=>Object.keys(duDes))
    .then(perse=> {
      res.writeHead(200,{'content-type':'application/json'});
      res.end(JSON.stringify(perse));
    })
    .catch(err=> {
      res.setStatusCode=404;
      res.end(err.message);
    });
};

module.exports={
  sendFile,
  sendJson,
  sendDudes
};
