
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'jarvism' });
};

/*
 * GET fitness page.
 */

exports.fitness = function(req, res){
  res.render('fitness', { title: 'jarvism - fitness' });
};

/*
 * GET computing page.
 */

exports.computing = function(req, res){
  res.render('computing', { title: 'jarvism - computing' });
};

/*
 * GET music page.
 */

exports.music = function(req, res){
  res.render('music', { title: 'jarvism - music' });
};

/*
 * GET portfolio page.
 */

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'jarvism - portfolio' });
};



