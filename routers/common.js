
/**
 * 定义一些 通用的mock数据
 */

const Mock = require("mockjs");

const { Random } = Mock;
// mock外嵌套一层function是为了避免随机生成的所有array成员都是相同数据
const { basicArray } = Mock.mock({
  "basicArray|25": [{
    'code': function () { return Random.string('number', 5) },
    'name': function () { return Mock.mock('@name') },
    'id': function () { return Mock.mock('@id') },
  }]
});

// mock外嵌套一层function是为了避免随机生成的所有array成员都是相同数据
const { users } = Mock.mock({
  "users|5": [{
    'useCode': function () { return Random.string('number', 5) },
    'userName': function () { return Mock.mock('@name') },
    'userId': function () { return Mock.mock('@id') },
  }]
});

const noMockArray = Array.from(
  { length: 25 },
  (item, key) => ({ id: key, name: `张${key}`, code: String(key) })
);

const lovConfig = {
  "title": "查询公司",
  "url": "/base/api/data/list/page",
  "searchForm": [
    { "type": "input", "id": "code", "label": "代码" },
    { "type": "input", "id": "name", "label": "名称" },
    { "type": "input", "id": "enabled", "label": "启用" }
  ],
  "columns": [
    {
      "title": "代码",
      "dataIndex": "code",
      "fieldType": "string",
      "id": null,
      "width": 200,
      "align": "center"
    }, {
      "title": "名称",
      "dataIndex": "name",
      "fieldType": "string",
      "id": null,
      "width": 200,
      "align": "center"
    }, {
      "title": "启用",
      "dataIndex": "enabled",
      "fieldType": "string",
      "id": null,
      "width": 200,
      "align": "left"
    }],
  "method": "get"
}

module.exports = {
  basicArray,
  noMockArray,
  lovConfig,
  users,
};