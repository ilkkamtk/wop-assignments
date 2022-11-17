'use strict';
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const {cat_list_get, cat_get, cat_post, cat_put, cat_delete} = require(
    '../controllers/catController');
const {body} = require('express-validator');
const router = express.Router();

router.route('/').
    get(cat_list_get).
    post(upload.single('cat'),
        body('name').isLength({min: 1}).escape(),
        body('birthdate').isDate(),
        body('weight').isNumeric(),
        cat_post);

router.route('/:id').
    get(cat_get).
    delete(cat_delete).
    put(body('name').isLength({min: 1}).escape(),
        body('birthdate').isDate(),
        body('weight').isNumeric(),
        cat_put);

module.exports = router;
