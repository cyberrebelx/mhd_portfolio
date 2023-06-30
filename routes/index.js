const  express = require('express');
const  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
  
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Me' });
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
});



module.exports = router;
