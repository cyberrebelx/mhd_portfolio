let contacts_DB = "mongodb+srv://dbadmin:DHJb5AlrPlGPlUGq@clustercomp229.eohxdyl.mongodb.net/business_contacts";
let mongoose = require('mongoose');



module.exports = function() {
    mongoose.connect(contacts_DB)
    .then(() => console.log('Conected to MonogoDB'));

    mongoose.connect(contacts_DB);

    let contacts_mongoDB = mongoose.connection;

    contacts_mongoDB.on('error', console.error.bind(console, 'Connection Error'));
    contacts_mongoDB.once('open', ()=> {
        console.log("====> Conected to contacts MonogoDB")
    })

    return contacts_mongoDB;
}