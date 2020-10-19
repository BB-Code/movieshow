/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');
var user = new mongoose.Schema({
    userName: String,
    password: String,
    userMail: String,
    userPhone: String,
    userAdmin: Boolean,
    userPower: Number,
    userStop: Boolean
});

user.statics.findAll = function (cb) {
    this.find({}, cb);
};

user.statics.findById = function (user_id, cb) {
    this.find({ _id: user_id }, cb);
};

user.statics.findByUserName = function (name, cb) {
    this.find({ userName: name }, cb);
};

user.statics.findUserLogin = function (name, password, cb) {
    this.find({ userName: name, password: password, userStop: false }, cb);
};

user.statics.findByUserPassword = function (name, mail, phone, cb) {
    this.find({ userName: name, userMail: mail, userPhone: phone }, cb);
};


var UserModel = mongoose.model('User', user);

module.exports = UserModel;