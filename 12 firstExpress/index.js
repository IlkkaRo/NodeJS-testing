'use strict';

const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (req, res) => res.send('Express to the world! Try /pic!'));

app.get('/pic', (req, res) => res.sendFile(__dirname + '/hold.jpg'));

app.listen(port, () => console.log(`Server serves ${port}!`));

//app.listen(function(){console.log(`Server serves ${this.address().port}`);});
//when there is no designated port
