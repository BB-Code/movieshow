/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');
var article = new mongoose.Schema({
    articleTitle: String,
    articleContext: String,
    articleTime: String
});

article.statics.findByArticleId = function (rid, cb) {
    this.find({ _id: rid }, cb);
}
article.statics.findAll = function (cb) {
    this.find({}, cb);
};

var articleModel = mongoose.model('Article', article);

module.exports = articleModel;