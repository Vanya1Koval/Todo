const User = require("../db/models/user.js");
const { default: mongoose } = require("mongoose");

UserModel = mongoose.model('User');

/**
  * Create record
  * @param  {Object} payload object with fields for creating record
  * @returns {Object} created record of user
  */
const createUser = async (payload) => UserModel.create(payload);

/**
  * Find one record by login
  * @param  {String} login uniq user`s login
  * @returns {Object}  record of user
  */
const getUserByLogin = async (login) => UserModel.findOne({ login });

module.exports = {
    createUser,
    getUserByLogin,
};