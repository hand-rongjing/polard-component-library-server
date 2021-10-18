
/**
 * GET /base/api/authority/query
 */
const Mock = require("mockjs");

const { Random } = Mock;
// mock外嵌套一层function是为了避免随机生成的所有array成员都是相同数据
const { array: data } = Mock.mock({
  "array|5": [{
    'dataAuthorityCode': function() { return Random.string('number', 5) },
    'dataAuthorityName': function () { return Mock.mock('@name') },
    'description': function () { return Mock.mock('@csentence()') },
  }]
});

module.exports = data;

