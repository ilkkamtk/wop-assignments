'use strict';
const express = require('express');
const {user_list_get, user_get, user_post, user_put, user_delete} = require(
    '../controllers/userController');
const {body} = require('express-validator');
const router = express.Router();

router.route('/').
    get(user_list_get).
    post(body('name').isLength({min: 3}).escape(),
        body('email').isEmail(),
        body('passwd').matches('(?=.*[A-ZÅÄÖ]).{8,}'),
        user_post).
    put(user_put);

router.route('/:id').get(user_get).delete(user_delete);

module.exports = router;
