module.exports = class User {
  constructor(params = {}) {
    this.userName = params.userName || null;
    this.firtsName = params.firtsName || null;
    this.lastName = params.lastName || null;
    this.email = params.email || null;
    this.password = params.password || null;
  }
};
