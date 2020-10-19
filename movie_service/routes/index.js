/*
 * @Author: bobocde
 * @Description: 
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var recommend = require('../models/recommend');
var movie = require('../models/movie');
var article = require('../models/article');
var user = require('../models/user');

/**
 * @apiDefine home 首页管理
 */


router.get('/', function (req, res, next) {
  var url = "http://localhost:3000/apidoc/";
  res.send(`API 接口: ${url}`);
});


/**
 * @api {get} /showBanner 获取轮播图
 * @apiDescription 获取轮播图
 * @apiName showBanner
 * @apiGroup home
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/showBanner
 * @apiVersion 1.0.0
 */
router.get('/showBanner', function (req, res, next) {
  recommend.findAll((err, recommenData) => {
    res.json({ status: 200, message: '获取推荐', recommenData });
  })
});

/**
 * @api {get} /showRanking 获取排行
 * @apiDescription 获取排行
 * @apiName showRanking
 * @apiGroup home
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/showRanking
 * @apiVersion 1.0.0
 */
router.get('/showRanking', function (req, res, next) {
  movie.find({ movieMainPage: true }, (err, moviesData) => {
    res.json({ status: 200, message: '获取主页', moviesData });
  })
});

/**
 * @api {get} /showArticle 获取文章
 * @apiDescription 获取文章
 * @apiName showArticle
 * @apiGroup home
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/showArticle
 * @apiVersion 1.0.0
 */
router.get('/showArticle', function (req, res, next) {
  article.find((err, articleData) => {
    res.json({ status: 200, message: '获取文章', articleData });
  })
});

/**
 * @api {post} /articleDetail 获取文章详情
 * @apiDescription 获取文章详情
 * @apiName articleDetail
 * @apiGroup home
 * @apiParam {string} article_id 文章Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/articleDetail
 * @apiVersion 1.0.0
 */
router.post('/articleDetail', function (req, res, next) {
  if (!req.body.article_id) {
    res.json({
      status: 100, message: '文章Id为空'
    });
  }
  article.findByArticleId(req.body.article_id, (err, articleData) => {
    if (err) {
      res.json({
        status: 100, message: '不存在此文章'
      });
    }
    if (articleData.length > 0) {
      res.json({ status: 200, message: '获取文章详情成功', data: articleData });
    } else {
      res.json({
        status: 100, message: '不存在此文章详情'
      });
    }
  })
});


/**
 * @api {post} /showUser 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName showUser
 * @apiGroup home
 * @apiParam {string} user_id 用户Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/showUser
 * @apiVersion 1.0.0
 */
router.post('/showUser', function (req, res, next) {
  if (!req.body.user_id) {
    res.json({
      status: 100, message: '用户Id为空'
    });

  }
  user.findById(req.body.user_id, (err, userData) => {
    if (err) {
      res.json({
        status: 100, message: '获取用户信息失败'
      });
    }
    res.json({
      status: 200, message: '获取用户信息成功', data: {
        user_id: userData[0]._id,
        userName: userData[0].userName,
        userMail: userData[0].userMail,
        userPhone: userData[0].userPhone,
        userStop: userData[0].userStop
      }
    });
  });
});

/**
 * @api {get} /mongooseTest 数据库链接测试
 * @apiDescription 数据库链接测试
 * @apiName mongooseTest
 * @apiGroup home
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/mongooseTest
 * @apiVersion 1.0.0
 */
router.get('/mongooseTest', function (req, res, next) {
  mongoose.connect('mongodb://localhost:27017/pets', { userMongoClient: true });
  mongoose.Promise = global.Promise;
  var cat = mongoose.model('Cat', { name: 'String' });
  var tom = new cat({ name: 'Tom' });
  tom.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success insert');
    }
  });
  res.send('db  connected success');
});


module.exports = router;
