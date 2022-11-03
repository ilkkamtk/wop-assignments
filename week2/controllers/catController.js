'use strict';
// catController
const {getCat, getAllCats, addCat} = require('../models/catModel');

const cat_list_get = async (req, res) => {
  const kissat = await getAllCats();
  res.json(kissat);
};

const cat_get = async (req, res) => {
  const cat = await getCat(req.params.id);
  if(cat.length > 0) {
    res.json(cat.pop());
  } else {
    res.send('virhe');
  }
};

const cat_post = async (req, res) => {
  console.log('cat_post', req.body, req.file);
  const data = [
      req.body.name,
      req.body.birthdate,
      req.body.weight,
      req.body.owner,
      req.file.filename,
  ];

  const result = await addCat(data);
  console.log('addCat', result);
  res.send('Cat post done.');
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};