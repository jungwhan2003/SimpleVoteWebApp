
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'VoteRight Admin' });
};

exports.admin = function(req, res){
	res.render('admin',{title: 'VoteRight Admin'});
};

exports.selecting = function(req, res){
	res.render('selecting', {title: 'VoteRight Selection'});
};