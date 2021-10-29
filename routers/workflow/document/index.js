

/**
 * GET /workflow/document/submit
 */
const approverList = require('./data')
module.exports = function (req, res, next) {
  res.send(approverList);
}