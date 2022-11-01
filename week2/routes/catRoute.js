'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

router.get('/:id', (req, res) => {
  // console.log('/cat/:id', req.params.id);
  res.send(`You requested a cat whose id is ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('From this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

module.exports = router;
