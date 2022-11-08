'use strict';
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const {cat_list_get, cat_get, cat_post, cat_put, cat_delete} = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), cat_post);

router.put('/', cat_put);

router.delete('/',cat_delete);

module.exports = router;
