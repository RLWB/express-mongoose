var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/userdb";
var MongoDB = mongoose.connect(mongoURI, { useNewUrlParser: true }).connection;

var userSchema = new mongoose.Schema({
    username: String,
    email: String
})

var model = mongoose.model('user', userSchema);

module.exports = model;