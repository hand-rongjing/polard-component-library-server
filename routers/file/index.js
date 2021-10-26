var express = require('express');
var router = express.Router();

router.get('/api/attachments/view/zip/tree', (req, res) => {
  res.send({
    key: '0',
    title: "zip_test",
    treeType: "DIR",
    children: [
      {
        key: '123',
        staticFileUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        title: 'test.png',
        selectable: true,
        treeType: "FILE",
      }
    ]
  });
});

module.exports = router;
