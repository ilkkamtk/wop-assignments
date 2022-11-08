'use strict';
// userController
const {getUser, getAllUsers, addUser} = require('../models/userModel');

const user_list_get = async (req, res, next) => {
  res.json(await getAllUsers(next));
};

const user_get = async (req, res, next) => {
  const user = await getUser(req.params.id, next);
  res.json(user.pop());
};

const user_post = async (req, res, next) => {
  console.log('user_post', req.body);

  const data = [
    req.body.name,
    req.body.email,
    req.body.passwd,
  ];

  const result = await addUser(data, next);
  if (result.affectedRows > 0) {
    res.json({
      message: 'user added',
      user_id: result.insertId,
    });
  } else {
    res.send('virhe');
  }
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};