var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', function(req, res, next) {
  var list = [{_id: 1, username: 'huiren', email: '1017669154@qq.com'}];
  res.render('UserList', {
    user:list
  })
});

module.exports = router;
