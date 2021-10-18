

/**
 * 分页获取数据 
 */

var { noMockArray } = require('../../common');

module.exports = function (req, res, next) {
  let { page, size } = req.query;
  const { name } = req.query;
  const filterArray = name ? noMockArray.filter(item => item.name.includes(name)) : noMockArray;
  page = Number.parseInt(page);
  size = Number.parseInt(size);
  const startIndex = page * size;
  const endIndex = page * size + size;
  console.log(startIndex, endIndex, '--')
  res.set({
    "x-total-count": filterArray.length,
  });
  res.send(filterArray.slice(startIndex, endIndex));
}
