'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute(`SELECT user_id, name, email, role FROM wop_user;`);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getUser = async (userId) => {
  try {
    const [rows] = await promisePool.execute(`SELECT user_id, name, email, role FROM wop_user
                                              WHERE user_id = ?;`, [userId]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const addUser = async (data) => {
  try {
    const [rows] = await promisePool.execute(`INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?);`, data);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
}


module.exports = {
  getAllUsers,
  getUser,
  addUser,
};