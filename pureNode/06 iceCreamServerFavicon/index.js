'use strict';

const http=require('http');
//const fs=require('fs'); not needed anymore
const path=require('path');
const url=require('url');

const {sendFile, sendJson, sendFlavors}=require(path.join(__dirname,'filehandler.js')); //can get it like this from other file, own library
//console.log(__dirname)

const config=require(path.join(__dirname,'config.json'));

// console.log(config);
// console.log(config.port);

const homePath=path.join(__dirname,'home.html');
const faviconPath=path.join(__dirname, 'iceCream.png');

const server=http.createServer((req, res)=>{
//  console.log(req.url);

  let route=url.parse(req.url).pathname;

  if(route==='/') {
    sendFile(res,homePath);

  }
  else if(route==='/iceCream.png') {
    sendFile(res,faviconPath,{type:'image/png', encoding:'binary'});
  }
  else if(route==='/all'){
    sendFlavors(res);
  }
  else if(route.startsWith('/style')){
    sendFile(res,path.join(__dirname, route),
      {type:'text/css',encoding:'utf8'});
  }
  else if(route.startsWith('/images')) {
    sendFile(res,path.join(__dirname,route), //.substr(1) ??
      {type:'image/png', encoding:'binary'});
  }
  else if(route.startsWith('/js')) {
    sendFile(res,path.join(__dirname,route),
      {type:'text/javascript', encoding:'utf8'});
  }
  else if(route.startsWith('/api')) { //url: /api/blueberry
    let parts=route.split('/');
    if(parts.length>2) {
      sendJson(res, parts[2]);
    }
  }
  else {
    res.end();
  }

});

server.listen(config.port, config.host, ()=>{
  console.log(`Server ${config.host} is running at port ${config.port}`)
});
