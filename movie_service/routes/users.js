/*
 * @Author: bobocde
 * @Description: 
 */
var express = require('express');
var router = express.Router();
var user = require('../models/user');
var comment = require('../models/comment');
var movie = require('../models/movie');
var mail = require('../models/mail');
var crypto = require('crypto');

const init_token = 'bbCode12345678';
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/**
 * @apiDefine users 用户管理
 */


/**
 * @api {post} /users/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup users
 * @apiParam {string} userName 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/login
 * @apiVersion 1.0.0
 */
router.post('/login', (req, res, next) => {
  if (!req.body.userName) {
    res.json({ status: 100, message: '用户名为空' });
  }
  if (!req.body.password) {
    res.json({ status: 100, message: '密码为空' });
  }
  user.findUserLogin(req.body.userName, req.body.password, (err, userSave) => {
    if (userSave.length != 0) {
      var endToken = getMD5Password(userSave[0]._id);
      res.json({ status: 200, data: { token: endToken, user: userSave }, message: '用户登录成功' });
    } else {
      res.json({ status: 100, message: '用户名或密码错误!' });
    }
  })
});


/**
 * @api {post} /users/register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup users
 * @apiParam {string} userName 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} userMail 邮箱
 * @apiParam {string} userPhone 手机
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/register
 * @apiVersion 1.0.0
 */
router.post('/register', function (req, res, next) {
  if (!req.body.userName) {
    res.json({ status: 100, message: '用户名为空' });
  }
  if (!req.body.password) {
    res.json({ status: 100, message: '密码为空' });
  }
  if (!req.body.userMail) {
    res.json({ status: 100, message: '邮箱为空' });
  }
  if (!req.body.userPhone) {
    res.json({ status: 100, message: '手机为空' });
  }
  user.findByUserName(req.body.userName, (err, userSave) => {
    if (userSave.length > 0) {
      res.json({ status: 100, message: '用户已存在' })
    } else {
      var registerUser = new user({
        userName: req.body.userName,
        password: req.body.password,
        userMail: req.body.userMail,
        userPhone: req.body.userPhone,
        userAdmin: 0,
        userPower: 0,
        userStop: 0,
      });
      registerUser.save(() => {
        res.json({ status: 200, message: '注册成功' });
      });
    }
  })
});


/**
 * @api {post} /users/updatePassword 密码修改
 * @apiDescription 密码修改
 * @apiName updatePassword
 * @apiGroup users
 * @apiParam {string} userName 用户名
 * @apiParam {string} password 旧密码
 * @apiParam {string} userMail 邮箱
 * @apiParam {string} userPhone 手机
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/updatePassword
 * @apiVersion 1.0.0
 */
router.post('/updatePassword', function (req, res, next) {
  if (req.body.password) {
    if (req.body.token) {
      if (!req.body.user_id) {
        res.json({ status: 100, message: '用户登录错误' });
      }
      if (!req.body.password) {
        res.json({ status: 100, message: '用户旧密码错误' });
      }
      if (req.body.token == getMD5Password(req.body.user_id)) {
        user.findOne({
          _id: req.body.user_id,
          password: req.body.password
        }, (err, checkUser) => {
          if (checkUser) {
            if (req.body.password == req.body.repassword) {
              res.json({ status: 100, message: '新密码与旧密码一致' });
              return false;
            } else {
              user.update({
                _id: req.body.user_id
              }, {
                password: req.body.repassword
              }, (err, userUpdate) => {
                if (err) {
                  res.json({ status: 100, message: '密码修改错误', data: err });
                }
                res.json({ status: 200, message: '密码修改成功', data: userUpdate });
              })
            }
          } else {
            res.json({ status: 100, message: '旧密码错误', data: err });
          }
        })

      } else {
        res.json({ status: 100, message: '用户登录错误' });
      }
    } else {
      //不存在token时
      user.findByUserPassword(req.body.userName, req.body.userMail, req.body.userPhone, (err, userFound) => {
        if (userFound.length != 0) {
          user.update({
            _id: userFound[0]._id,
          }, {
            password: req.body.repassword
          }, (err, userUpdate) => {
            if (err) {
              res.json({ status: 100, message: '密码修改错误', data: err });
            }
            res.json({ status: 200, message: '密码修改成功', data: userUpdate });
          })
        } else {
          res.json({ status: 100, message: '信息错误' });
        }
      });
    }
  } else {
    //非登录状态
    if (!req.body.userName) {
      res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.userMail) {
      res.json({ status: 100, message: '邮箱为空' });
    }
    if (!req.body.userPhone) {
      res.json({ status: 100, message: '手机为空' });
    }
    user.findByUserPassword(req.body.userName, req.body.userMail, req.body.userPhone, (err, userFound) => {
      if (userFound.length != 0) {
        res.json({
          status: 100, message: '验证成功,请修改密码', data: {
            username: req.body.userName,
            mail: req.body.userMail,
            phone: req.body.userPhone,
          }
        });
      } else {
        res.json({ status: 100, message: '信息错误' });
      }
    });
  }
});


/**
 * @api {post} /users/postComment 用户评论
 * @apiDescription 用户评论
 * @apiName postComment
 * @apiGroup users
 * @apiParam {string} userName 用户名
 * @apiParam {string} movie_id 电影Id
 * @apiParam {string} context 评论内容
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/postComment
 * @apiVersion 1.0.0
 */
router.post('/postComment', function (req, res, next) {
  if (!req.body.username) {
    var username = '匿名用户';
  }
  if (!req.body.movie_id) {
    res.json({ status: 100, message: '电影Id为空' });
  }
  if (!req.body.context) {
    res.json({ status: 100, message: '评论内容为空' });
  }

  var saveComment = new comment({
    movie_id: req.body.movie_id,
    username: req.body.username ? req.body.username : username,
    context: req.body.context,
    check: 0
  });
  saveComment.save((err) => {
    if (err) {
      res.json({ status: 100, message: err });
    }
    res.json({ status: 100, message: '评论成功' });
  })

});


/**
 * @api {post} /users/support 用户点赞
 * @apiDescription 用户点赞
 * @apiName support
 * @apiGroup users
 * @apiParam {string} movie_id 电影Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/support
 * @apiVersion 1.0.0
 */
router.post('/support', function (req, res, next) {
  if (!req.body.movie_id) {
    res.json({ status: 100, message: '电影Id为空' });
  }
  movie.findById(req.body.movie_id, (err, movieData) => {
    if (movieData.length > 0) {
      movie.update({
        _id: req.body.movie_id
      }, {
        movieNumSupport: movieData[0].movieNumSupport + 1
      }, (err) => {
        if (err) {
          res.json({ status: 100, message: err });
        }
        res.json({ status: 200, message: '点赞成功' });
      });
    } else {
      res.json({ status: 100, message: '不存在此电影' });
    }
  });
});

/**
 * @api {post} /users/download 用户下载
 * @apiDescription 用户下载
 * @apiName download
 * @apiGroup users
 * @apiParam {string} movie_id 电影Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/download
 * @apiVersion 1.0.0
 */
router.post('/download', function (req, res, next) {
  if (!req.body.movie_id) {
    res.json({ status: 100, message: '电影Id为空' });
  }
  movie.findById(req.body.movie_id, (err, movieData) => {
    if (movieData.length > 0) {
      movie.update({
        _id: req.body.movie_id
      }, {
        movieNumDownloads: movieData[0].movieNumDownloads + 1
      }, (err) => {
        if (err) {
          res.json({ status: 100, message: '下载失败', data: err });
        }
        res.json({ status: 200, message: '下载成功' });
      });
    } else {
      res.json({ status: 100, message: '不存在此电影' });
    }
  });
});

/**
 * @api {post} /users/sendEmail 发送邮箱
 * @apiDescription 发送邮箱
 * @apiName sendEmail
 * @apiGroup users
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} toUserName 电影Id
 * @apiParam {string} title 邮件标题
 * @apiParam {string} content 邮件内容
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/sendEmail
 * @apiVersion 1.0.0
 */
router.post('/sendEmail', function (req, res, next) {
  if (!req.body.token) {
    res.json({ status: 100, message: '用户登录状态错误' });
  }
  if (!req.body.user_id) {
    res.json({ status: 100, message: '用户Id为空' });
  }
  if (!req.body.toUserName) {
    res.json({ status: 100, message: '发送人为空' });
  }
  if (!req.body.title) {
    res.json({ status: 100, message: '标题为空' });
  }
  if (!req.body.content) {
    res.json({ status: 100, message: '内容为空' });
  }
  if (req.body.token == getMD5Password(req.body.user_id)) {
    user.findByUserName(req.body.userName, (err, userData) => {
      if (userData.length > 0) {
        var mailData = new mail({
          fromUser: req.body.user_id,
          toUser: userData[0]._id,
          title: req.body.title,
          content: req.body.content,
        });

        mailData.save((err, data) => {
          if (err) {
            res.json({ status: 100, message: '发送失败', data: err });
          }
          res.json({ status: 200, message: '发送成功' });
        });
      } else {
        res.json({ status: 100, message: '你发送的对象不存在' });
      }
    })
  } else {
    res.json({ status: 100, message: '用户登录错误' });
  }
});

/**
 * @api {post} /users/showEmail 获取发送的站内信
 * @apiDescription 获取发送的站内信
 * @apiName showEmail
 * @apiGroup users
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} receive 发送参数（1:发送,2:收到）
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/users/showEmail
 * @apiVersion 1.0.0
 */
router.post('/showEmail', function (req, res, next) {
  if (!req.body.token) {
    res.json({ status: 100, message: '用户状态错误' });
  }
  if (!req.body.user_id) {
    res.json({ status: 100, message: '用户Id为空' });
  }
  if (!req.body.receive) {
    res.json({ status: 100, message: '参数出错' });
  }
  if (req.body.token == getMD5Password(req.body.user_id)) {
    if (req.body.receive == 1) {
      mail.findByFromUser(req.body.user_id, (err, sendData) => {
        res.json({ status: 200, message: '获取发送的站内信成功', data: sendData });
      })
    } else {
      mail.findBytoUser(req.body.user_id, (err, sendData) => {
        res.json({ status: 200, message: '获取收到的站内信成功', data: sendData });
      })
    }
  } else {
    res.json({ status: 100, message: '用户登录错误' });
  }
});

function getMD5Password(id) {
  var md5 = crypto.createHash('md5');
  var token = id + init_token;
  return md5.update(token).digest('hex');
}
module.exports = router;
