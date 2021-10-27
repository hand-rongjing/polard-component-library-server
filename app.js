/*
 * @Author: binfeng.long@hand-china.com
 * @Date: 2021-09-15 18:08:19
 * @LastEditors: binfeng.long@hand-china.com
 * @LastEditTime: 2021-10-26 14:29:45
 * @Version: 1.0.0
 * @Description: 
 * @Copyright: Copyright (c) 2021, Hand-RongJing
 */
var express = require("express");
var morgan = require('morgan');

var baseRouter = require('./routers/base/index');
var workflowRouter = require('./routers/workflow/index');
var app = express();

app.use(morgan('combined'));

app.use("/base",baseRouter);
app.use("/workflow",workflowRouter);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
