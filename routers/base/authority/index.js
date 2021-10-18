

/**
 * GET /base/api/authority/query
 */
var authorityList = require('./data');

module.exports = function (req, res, next) {
  res.send(authorityList);
}