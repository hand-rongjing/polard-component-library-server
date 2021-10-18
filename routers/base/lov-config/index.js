

var { lovConfig } = require('../../common');

module.exports = function (req, res, next) {
  res.send(lovConfig);
}
