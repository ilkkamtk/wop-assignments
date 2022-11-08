'use strict';
const pool = require('../database/db');
const {httpError} = require('../utils/errors');
const promisePool = pool.promise();

const getAllCats = async (next) => {
  try {
    const [rows] = await promisePool.execute(`SELECT cat_id, wop_cat.name, weight, owner, filename, birthdate, wop_user.name as ownername 
                                              FROM wop_cat 
                                              JOIN wop_user 
                                              ON wop_user.user_id = wop_cat.owner;`);
    return rows;
  } catch (e) {
    console.error('getAllCats', e.message);
    next(httpError('Database error', 500));
  }
};

const getCat = async (catId, next) => {
  try {
    const [rows] = await promisePool.execute(`SELECT cat_id, wop_cat.name, weight, owner, filename, birthdate, wop_user.name as ownername 
                                              FROM wop_cat 
                                              JOIN wop_user 
                                              ON wop_user.user_id = wop_cat.owner 
                                              WHERE cat_id = ?;`, [catId]);
    return rows;
  } catch (e) {
    console.error('getCat', e.message);
    next(httpError('Database error', 500));
  }
};

const addCat = async (data, next) => {
  try {
    const [rows] = await promisePool.execute(`INSERT INTO wop_cat (name, birthdate, weight, owner, filename) VALUES (?, ?, ?, ?, ?);`, data);
    return rows;
  } catch (e) {
    console.error('addCat', e.message);
    next(httpError('Database error', 500));
  }
}

const updateCat = async (data, next) => {
  try {
    const [rows] = await promisePool.execute(`UPDATE wop_cat set name = ?, birthdate = ?, weight = ?, owner = ? WHERE cat_id = ?;`, data);
    return rows;
  } catch (e) {
    console.error('updateCat', e.message);
    next(httpError('Database error', 500));
  }
}

const deleteCat = async (catId, next) => {
  try {
    const [rows] = await promisePool.execute(`DELETE FROM wop_cat where cat_id = ?;`, [catId]);
    return rows;
  } catch (e) {
    console.error('deleteCat', e.message);
    next(httpError('Database error', 500));
  }
}

module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat,
};