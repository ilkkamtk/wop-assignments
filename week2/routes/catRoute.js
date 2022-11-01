'use strict';
const express = require('express');
const {cat_list_get, cat_get} = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', cat_get);

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
