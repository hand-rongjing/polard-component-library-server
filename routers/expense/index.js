var express = require('express');
var router = express.Router();

router.get('/api/budget/reserves/all/related/control/rule/query', (req, res) => {
  res.send([{
    id: '1', controlRuleName: 'test',
  }]);
});

router.get('/api/budget/reserves/budget/progress/query', (req, res) => {
  res.send([]);
})

router.post('/api/excel/import/get/properties', (req, res) => {
  res.send({
    templateName: '测试导入',
    templateCode: 'test',
    sheetList: [{
      sheetName: '页签1',
      sheetIndex: 1,
      columns: [
        { columnName: '公司', columnCode: 'companyCode' },
        { columnName: '部门', columnCode: 'departmentCode' },
        { columnName: '岗位', columnCode: 'positionCode' },
        { columnName: '测试', columnCode: 'test' },
      ],
    }],
  })
})

router.get('/api/expense/report/type/section/expense/type', (req, res) => {
  res.send([
    { id: '1', name: '宣传费', typeCategoryId: '22', typeCategoryName: '日常费用类型', iconUrl: 'https://rzhdev.polaris.pub/expense/jiaotongfei.png' },
    { id: '2', name: '火车票', typeCategoryId: '22', typeCategoryName: '日常费用类型', iconUrl: 'https://rzhdev.polaris.pub/expense/huoche.png' },
    { id: '3', name: '餐饮', typeCategoryId: '23', typeCategoryName: '差旅费用类型', iconUrl: 'https://rzhdev.polaris.pub/expense/jiaotongfei.png' },
    { id: '4', name: '交通', typeCategoryId: '23', typeCategoryName: '差旅费用类型', iconUrl: 'https://rzhdev.polaris.pub/expense/jiaotongfei.png' },
  ]);
})

module.exports = router;
