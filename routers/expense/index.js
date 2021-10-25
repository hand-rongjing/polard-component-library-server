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

module.exports = router;
