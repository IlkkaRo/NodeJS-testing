'use strict';

const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (req, res) => res.send('Express to the world!'));

app.get('/pic', (req, res) => res.sendFile(__dirname + '/hold.jpg'));

app.listen(port, () => console.log(`Example listening to port ${port}!`));
