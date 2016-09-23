var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var comments = mongoose.model('comments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('artists/djfalke19');
});
router.get('/artists/djfalke19', function(req, res, next) {
  res.render('artists/djfalke19/index', { title: 'RadioCapriccio' });
});

router.post('/message', function(req, res, next) {
		  // Database Entry
	  var comment = new comments({
  			name : req.body.name,
			email : req.body.email,
			comments : req.body.message,
			number : req.body.phone
	  });
		  comment.save(function(err, comment) {
		  	if (err){
		  		console.log(err);
		  		//req.flash('error','Database Error. Please Try again or Contact Admin if it persists.');
		  		res.redirect('/artists/djfalke19');
		  	}
		  	else{
		  		console.log(comment);
		  		//req.flash('success','Your Comment has been recorded');
	  			res.redirect('/artists/djfalke19');
		  	}
		  });
	});

module.exports = router;

