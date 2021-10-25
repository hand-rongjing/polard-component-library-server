/*
 * @Author: binfeng.long@hand-china.com
 * @Date: 2021-09-15 18:08:19
 * @LastEditors: binfeng.long@hand-china.com
 * @LastEditTime: 2021-09-17 17:15:41
 * @Version: 1.0.0
 * @Description: 
 * @Copyright: Copyright (c) 2021, Hand-RongJing
 */
var express = require("express");
var morgan = require('morgan');

var { resData } = require("./mock/proxy");

var baseRouter = require('./routers/base/index');
var fileRouter = require('./routers/file/index');
var expenseRouter = require('./routers/expense/index');

var app = express();

app.use(morgan('combined'));

app.use("/base",baseRouter);
app.use("/file", fileRouter);
app.use("/budget", expenseRouter);
app.use("/expense", expenseRouter);

// app.use((req, res) => {
//   var result = resData[req.method][req.url];
//   if (Object.prototype.toString.call(result) === "[object String]" || Object.prototype.toString.call(result) === "[object Array]") {
//     res.json(result)
//   } else if (Object.prototype.toString.call(result) === "[object Function]") {
//     result(req, res);
//   }
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
