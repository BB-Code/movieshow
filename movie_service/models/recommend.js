/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');
var recommend = new mongoose.Schema({
    recommendImg: String,
    recommendSrc: String,
    recommendTitle: String
});

recommend.statics.findById = function (rid, cb) {
    this.find({ _id: rid }, cb);
}
recommend.statics.findAll = function (cb) {
    this.find({}, cb);
};

var recommendModel = mongoose.model('Recommend', recommend);

module.exports = recommendModel;