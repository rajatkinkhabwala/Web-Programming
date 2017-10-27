const MongoClient = require("mongodb").MongoClient;

const settings = {
    mongoConfig: {
        serverURL: "mongodb://localhost:27017/",
        database: "lab7-recipes"
    }
};

let fullMongoURL = settings.mongoConfig.serverURL + settings.mongoConfig.database;
let _connection = undefined

let connectDB = () => {
   if(!_connection){
       _connection = MongoClient.connect(fullMongoURL)
       .then((db) => {
           return db;
       });
   }
   return _connection;
};

module.exports = connectDB;