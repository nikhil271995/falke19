var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('artists/djfalke19');
});
router.get('/artists/djfalke19', function(req, res, next) {
  res.render('artists/djfalke19/index', { title: 'RadioCapriccio' });
});


module.exports = router;

