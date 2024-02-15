const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://uthpalasahas:zHQ1nYmZ1UFBPksv@cluster0.kf2jxfl.mongodb.net/shop?retryWrites=true&w=majority').then(client => {
        console.log('connectd.');
        _db = client.db();
        callback();
    }).catch(err => {
        console.log(err);
        throw err;
    });
};

const  getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No Database Found.';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

