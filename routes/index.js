const  express = require('express');
const  router = express.Router();
let indexController = require('../controllers/index')


/* GET home page. */
router.get('/', indexController.home );
router.get('/about', indexController.about );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', userName: req.user ? req.user.username : '' });
  
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Me'});
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects', userName: req.user ? req.user.username : '' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Services', userName: req.user ? req.user.username : '' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact', userName: req.user ? req.user.username : '' });
});



module.exports = router;
