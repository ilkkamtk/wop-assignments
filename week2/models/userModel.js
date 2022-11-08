'use strict';
const pool = require('../database/db');
const {httpError} = require('../utils/errors');
const promisePool = pool.promise();

const getAllUsers = async (next) => {
  try {
    const [rows] = await promisePool.execute(`SELECT user_id, name, email, role FROM wop_user;`);
    return rows;
  } catch (e) {
    console.error('getAllUsers', e.message);
    next(httpError('Database error', 500));
  }
};

const getUser = async (userId, next) => {
  try {
    const [rows] = await promisePool.execute(`SELECT user_id, name, email, role FROM wop_user
                                              WHERE user_id = ?;`, [userId]);
    return rows;
  } catch (e) {
    console.error('getUser', e.message);
    next(httpError('Database error', 500));
  }
};

const addUser = async (data, next) => {
  try {
    const [rows] = await promisePool.execute(`INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?);`, data);
    return rows;
  } catch (e) {
    console.error('addUser', e.message);
    next(httpError('Database error', 500));
  }
}


module.exports = {
  getAllUsers,
  getUser,
  addUser,
};