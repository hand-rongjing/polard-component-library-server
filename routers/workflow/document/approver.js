/*
 * @Author: binfeng.long@hand-china.com
 * @Date: 2021-10-29 15:32:09
 * @LastEditors: binfeng.long@hand-china.com
 * @LastEditTime: 2021-10-29 15:32:10
 * @Version: 1.0.0
 * @Description: 
 * @Copyright: Copyright (c) 2021, Hand-RongJing
 */
/**
 * POST /api/wfl/identity/optional/query/by/document
 */
const { users } = require('../../common')
module.exports = function (req, res, next) {
  res.send(users);
}