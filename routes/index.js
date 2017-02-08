var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scot McLean' });
});
router.get('/scot', function(req, res, next) {
  res.render('scot');
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme');
});
router.get('/projects', function(req, res, next) {
  res.render('projects');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});

module.exports = router;
