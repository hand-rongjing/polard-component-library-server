var express = require('express');
var router = express.Router();

var getAuthority = require('./authority');
var getComponentSetting = require('./component-setting');
var getDataWhenAsyncLoad = require('./data-part-load');
var getLovConfig = require('./lov-config');

router.get('/api/authority/query', getAuthority);
router.get('/api/user/component/setting/list', getComponentSetting);
router.get('/api/data/list/page', getDataWhenAsyncLoad);
router.get('/api/lov/detail/:code', getLovConfig);

module.exports = router;
