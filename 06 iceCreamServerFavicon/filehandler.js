'use strict';
//so we don't have to write the same stuff over and over...our own library
const fs=require('fs');
const path=require('path');

function read(filepath, encoding) { //can't be accessed outside filehandler, due to module export
  return new Promise((resolve, reject)=> {
    fs.readFile(filepath, encoding, (err,data)=> {
      if(err){
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}

const sendFile = function(res,filepath,
  options={ //gives default values for option, if it isn't given.
    type:'text/html',
    encoding:'utf8'
  }){
  read(filepath,options.encoding)
    .then(data => { //if all went right, due to read()
      res.writeHead(200, {
        'content-type':options.type,
        'content-length':data.length
      });
      res.end(data,options.encoding);
    })
    .catch(err=>{ //if there was an error go here, due to read()
      res.setStatusCode=404;
      res.end(err.message);
    });
};

// const sendJson=function(res, flavor) {...} = older way to do this
const sendJson=(res, flavor)=> {
  read(path.join(__dirname, 'iceCream.json'),'utf8') //returns a promise
    .then(data=>JSON.parse(data))
    .then(iceCreams=> {
      if(Object.keys(iceCreams).includes(flavor)) {
        res.writeHead(200, {'content-type':'application/json'});
        res.end(JSON.stringify(iceCreams[flavor]));
      }
    })
    .catch(err=>{res.setStatusCode=404;
      res.end(err.message);
    });
};

const sendFlavors = res => {
  read(path.join(__dirname, 'iceCream.json'), 'utf8')
    .then(data=>JSON.parse(data))
    .then(iceCreams=>Object.keys(iceCreams))
    .then(flavors=> { 
      res.writeHead(200,{'content-type':'application/json'});
      res.end(JSON.stringify(flavors));
    })
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
};

module.exports={
  sendFile,
  sendJson,
  sendFlavors
};
