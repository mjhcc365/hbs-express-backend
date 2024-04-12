var express = require('express');
var router = express.Router();



// 保存作为模板
// /* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('POST request to the homepage')
});


module.exports  = router