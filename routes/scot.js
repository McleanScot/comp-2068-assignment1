let express = require('express');
let router = express.Router();

//get scot main page
router.get('/', function(req, res, next){
  res.render('scot/index');
});

module.exports = router;
