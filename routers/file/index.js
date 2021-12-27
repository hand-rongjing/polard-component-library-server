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

router.post('/api/attachment/get/by/pkValues', (req, res) => {
  res.send({
    123: [
      {
        id: '1233',
        staticFileUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        fileName: 'test1.png',
        fileType: "image/png"
      },
      {
        id: '1234',
        staticFileUrl: 'https://www.google.cn/landing/cnexp/google-search.png',
        fileName: 'test2.png',
        fileType: "image/png"
      }
    ]
  });
});

module.exports = router;
