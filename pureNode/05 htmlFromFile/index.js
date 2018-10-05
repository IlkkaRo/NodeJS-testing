/*eslint-disable no-console*/
//dont usually do the no cosole
'use strict';

const http=require('http');
const fs=require('fs');
const path=require('path');

const port=process.env.PORT || 3000;
const host=process.env.HOST || 'localhost';

const server=http.createServer((req, res)=>{
  let filePath=path.join(__dirname, 'home.html'); //test with homex.html TWO __
  console.log('filepath=', filePath);
  fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err) {
      res.setStatus=404;
      res.end(err.message); //no message in real server, vulnerability
    }
    else {
      res.writeHead(200, {
        'content-type':'text/html',
        'content-length':data.length
      });
      res.end(data);
    }
  });
});

server.listen(port,host,()=>
  console.log(`server ${host} is running at port ${port}`)
);
