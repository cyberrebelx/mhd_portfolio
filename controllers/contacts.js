// create a reference to the model
let ContactModel = require('../models/contacts');

// Gets all contacts from the Database and renders the page to list them all.
module.exports.contactList = async function(req, res, next) {
    try {
      let contactList = await ContactModel.find({}).sort({ name: 1 });
  
      res.render('contacts/contact_list', {
        title: 'Business Contact List',
        ContactsList: contactList,
        userName: req.user ? req.user.username : ''
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  

// Gets a contact by id and renders the details page.
module.exports.details = async (req, res, next) => {

    try {
        let id = req.params.id;

        let contactToShow = await ContactModel.findById(id);

        res.render('contacts/details', {
            title: 'Contact Details', 
            contact: contactToShow,
            userName: req.user ? req.user.username : ''
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE       
    let contact =  new ContactModel();

    res.render('contacts/add_edit',
        {
            title: 'Add a new Contact',
            contact: contact,
            userName: req.user ? req.user.username : ''
        });

}

// Processes the data submitted from the Add form to create a new car
module.exports.processAddPage = async(req, res, next) => {

    // ADD YOUR CODE HERE
    try {

        let newContact = ContactModel(req.body);

        let result = await ContactModel.create(newContact)

        // refresh the contacts list
        console.log(result);
        res.redirect('/contacts/list');

    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Gets a car by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = async(req, res, next) => {
    
    // ADD YOUR CODE HERE
    try {
        let id = req.params.id;

        let contactToEdit = await ContactModel.findById(id);

        res.render('contacts/add_edit',
            {
                title: 'Edit a Contact Details',
                contact: contactToEdit,
                userName: req.user ? req.user.username : ''
            });
    } catch (error) {
        console.log(error);
        next(error);
    }


}

// Processes the data submitted from the Edit form to update a car
module.exports.processEditPage = async(req, res, next) => {
    
    // ADD YOUR CODE HERE
    try {

        let id = req.params.id

       
        let updatedContact = { ...req.body };  // Builds updatedcontact from the values of the body of the request.
        
        delete updatedContact._id; // Exclude the _id field from the update
  
        // Submits updatedContact to the DB and waits for a result.
        let result = await ContactModel.updateOne({ _id: id }, updatedContact);
        console.log(result);

        // If the contact is updated redirects to the list
        if (result.modifiedCount > 0) {
            res.redirect('/contacts/list');
        }
        else {
            // Express will catch this on its own.
            throw new Error('Contact not updated. Are you sure it exists?') 
        }

    } catch (error) {
        next(error)
    }
    
}

// Deletes a contact based on its id.
module.exports.performDelete = async(req, res, next) => {
    
    // ADD YOUR CODE HERE
    try {

        let id = req.params.id;
        let result = await ContactModel.deleteOne({ _id: id });

        console.log("====> Result: ", result);
        if (result.deletedCount > 0) {
            // refresh the contacts list
            res.redirect('/contacts/list');
        }
        else {
            // Express will catch this on its own.
            throw new Error('Contact not deleted. Are you sure it exists?') 
        }

    } catch (error) {
        console.log(error);
        next(error);
    }

}