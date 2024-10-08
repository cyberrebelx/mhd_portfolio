var express = require('express');
var router = express.Router();

let contactController = require('../controllers/contacts');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE 
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();      

}

/* GET list of contacts */
router.get('/list', contactController.contactList);

// Route for Details
router.get('/details/:id', contactController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, contactController.displayEditPage);
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, contactController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

module.exports = router;
