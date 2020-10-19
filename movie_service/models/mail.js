/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');

var mail = new mongoose.Schema({
    fromUser: String,
    toUser: String,
    title: String,
    content: String,
});

mail.statics.findByFromUser = function (user_id, cb) {
    this.find({ fromUser: user_id }, cb);
};

mail.statics.findBytoUser = function (user_id, cb) {
    this.find({ toUser: user_id }, cb);
};

var mailModel = new mongoose.model('Mail', mail);

module.exports = mailModel;