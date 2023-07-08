module.exports.home = (function(req, res, next) {
    
    res.render('index', { title: 'Home', userName: req.user ? req.user.username : '' });
    console.log('===>From index controller home')
  });

  module.exports.about = (function(req, res, next) {
    
    res.render('index', { title: 'About', userName: req.user ? req.user.username : ''});
    console.log('===>From index controller about')
  });
 
  
 