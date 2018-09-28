'use strict';

const http=require('http');
const url=require('url');
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'home.html');

const port=process.env.PORT || 3000;
const host=process.env.HOST || '127.0.0.1';

const iceCreams=require(path.join(__dirname,'iceCream.json'));

// console.log(iceCreams.strawberry);
// console.log(iceCreams['blueberry']);
// console.log(iceCreams['blueberry'].name);
// console.log(iceCreams['vanilla']);
//
// let flavors=Object.keys(iceCreams);
// console.log(flavors);
// console.log(flavors.includes('blueberry'));
// console.log(flavors.includes('xberry'));

const server=http.createServer((req, res)=>{
  let route=url.parse(req.url).pathname;

  if(route==='/'){

    fs.readFile(filePath,'utf-8', (err, data)=>{
      if(err) {
        res.statusCode=404;
        res.end(err.message);
      }
      else {
        res.writeHead(200, {
          'content-type':'text/html',
          'content-length':data.length
        });
        res.end(data);
      }
    });
  }

  else {
    let responseJson='';
    if(route==='/all') {
      responseJson=Object.keys(iceCreams);
    }
    if(Object.keys(iceCreams).includes(route.substr(1))) {
      responseJson=iceCreams[route.substr(1)];
    }

    res.writeHead(200,{
      'content-type':'application/json',
      'Access-Control-Allow-Origin':'*'
    });
    res.end(JSON.stringify(responseJson));
  }
});

server.listen(port,host,()=>
  console.log(`Server ${host} is serving at port ${port}`)
);
