
var express = require('express');
var router = express.Router();

var getHistory = require('./history');

router.get('/api/workflow/approval/history', getHistory);

module.exports = router;


