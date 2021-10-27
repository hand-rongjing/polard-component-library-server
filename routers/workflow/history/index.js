/*
 * @Author: binfeng.long@hand-china.com
 * @Date: 2021-10-26 11:50:54
 * @LastEditors: binfeng.long@hand-china.com
 * @LastEditTime: 2021-10-26 14:17:10
 * @Version: 1.0.0
 * @Description: 
 * @Copyright: Copyright (c) 2021, Hand-RongJing
 */

/**
 * GET /api/workflow/approval/history
 */
var historyList = require('./data');

module.exports = function (req, res, next) {
  console.log(2)
  res.send(historyList);
}