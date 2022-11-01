'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

app.get('/cat/:id', (req, res) => {
  // console.log('/cat/:id', req.params.id);
  res.send(`You requested a cat whose id is ${req.params.id}`);
});

app.post('/cat', (req, res) => {
  res.send('From this endpoint you can add cats.');
});

app.put('/cat', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});

app.delete('/cat', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
