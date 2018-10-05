'use strict';

const http=require('http');
const url=require('url');
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'home.html');

const port=process.env.PORT || 3000;
const host=process.env.HOST || '127.0.0.1';

const server=http.createServer((req, res)=>{
  let route=url.parse(req.url).pathname;

  let responseJson='';
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
    if(route==='/vanilla') {
      responseJson={
        name:'Vanilla',
        price:'2 €'
      };
    }
    else if(route==='/strawberry') {
      responseJson={
        name:'Strawberry',
        price:'2.5 Egee!'
      };
    }
    else if(route==='/blueberry') {
      responseJson={
        name:'Blueberry',
        price:'Your firstborn'
      };
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
