const dbAcess = require('../database/connection');

module.exports = {
  sysdate(req, res) {
    dbAcess
      .raw(`SELECT SYSDATE FROM DUAL`)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};