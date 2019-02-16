/**
 * @class Represents a User.
 * @constructor
 * @param {string} userName - The username of the user.
 * @param {string} firtsName - The firt name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */

const User = class User {
  constructor(params = {}) {
    this.userName = params.userName || null;
    this.firtsName = params.firtsName || null;
    this.lastName = params.lastName || null;
    this.email = params.email || null;
    this.password = params.password || null;
  }
};

module.exports = User;
