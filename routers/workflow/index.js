
var express = require('express');
var router = express.Router();

var getHistory = require('./history');
var getApproverConfig = require('./document');
var getApprover = require('./document/approver');
var onDocSubmit = require('./document/doc-submit');

router.get('/api/workflow/approval/history', getHistory);
router.get('/api/document/submit', getApproverConfig);
router.post('/api/wfl/identity/optional/query/by/document', getApprover);
router.post('/api/wfl/identity/optional/choose/optional/select', onDocSubmit);

module.exports = router;


