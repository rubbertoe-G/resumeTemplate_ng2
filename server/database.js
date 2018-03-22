//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/resumedb';
var optionsDB = {
    autoReconnect: true,
    poolSize: 100,
    noDelay: true,
    connectTimeoutMS: 120000 // 2 minutes to conection timeout
}

mongoose.connect(mongoDB, optionsDB)
    .then(response => console.log('\nDatabase connection established at ' + mongoDB))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;