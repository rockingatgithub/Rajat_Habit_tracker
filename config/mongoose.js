
const mongoose = require('mongoose');

// connect from mongodb
mongoose.connect('mongodb+srv://sudhendra:pDk85mO2m5rFo79D@cluster0.rhtev.mongodb.net/?retryWrites=true&w=majority');

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;