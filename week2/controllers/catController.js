'use strict';
// catController
const {getCat, getAllCats} = require('../models/catModel');

const cat_list_get = async (req, res) => {
  const kissat = await getAllCats();
  res.json(kissat);
};

const cat_get = (req, res) => {
  const cat = getCat(req.params.id);
  console.log('kissa', cat);
  res.json(cat);
};

const cat_post = (req, res) => {
  console.log('cat_post', req.body, req.file);
  res.send('Cat post done.');
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};