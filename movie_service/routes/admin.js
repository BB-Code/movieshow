/*
 * @Author: bobocde
 * @Description: 
 */
var express = require('express');
var router = express.Router();
var user = require('../models/user');
var movie = require('../models/movie');
var comment = require('../models/comment');
var article = require('../models/article');
var recommend = require('../models/recommend');

/**
 * @apiDefine group 后台管理
 */

/**
 * @api {post} /admin/movieAdd 添加电影
 * @apiDescription 添加电影
 * @apiName movieAdd
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} movieName 电影名称
 * @apiParam {string} movieImg 电影图片
 * @apiParam {string} movieDownload 电影下载链接
 * @apiParam {string} movieMainPage 是否放首页(默认否)
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/movieAdd
 * @apiVersion 1.0.0
 */
router.post('/movieAdd', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.movieName) {
        res.json({ status: 100, message: '电影名称为空' });
    }
    if (!req.body.movieImg) {
        res.json({ status: 100, message: '电影图片为空' });
    }
    if (!req.body.movieDownload) {
        res.json({ status: 100, message: '电影下载链接为空' });
    }
    if (!req.body.movieMainPage) {
        var movieMainPage = false;
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                var saveMovie = new movie({
                    movieName: req.body.movieName,
                    movieImg: req.body.movieImg,
                    movieVideo: req.body.movieVideo,
                    movieDownload: req.body.movieDownload,
                    movieTime: Date.now(),
                    movieNumSupport: 0,
                    movieNumDownloads: 0,
                    movieMainPage: movieMainPage
                });

                saveMovie.save((err, result) => {
                    if (err) {
                        res.json({ status: 100, message: '添加电影失败', data: err });
                    } else {
                        res.json({ status: 200, message: '添加电影成功', data: result });
                    }
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })

});

/**
 * @api {post} /admin/movieDel 删除电影
 * @apiDescription 删除电影
 * @apiName movieDel
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} movie_id 电影Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/movieDel
 * @apiVersion 1.0.0
 */
router.post('/movieDel', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.movie_id) {
        res.json({ status: 100, message: '电影Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                movie.remove({ _id: req.body.movie_id }, (err, movieData) => {
                    res.json({ status: 200, message: '电影删除成功', data: movieData });
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })
});

/**
 * @api {post} /admin/movieUpdate 更新电影
 * @apiDescription 更新电影
 * @apiName movieUpdate
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} movie_id 电影Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/movieUpdate
 * @apiVersion 1.0.0
 */
router.post('/movieUpdate', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.movie_id) {
        res.json({ status: 100, message: '电影Id为空' });
    }
    var movieMainPage = req.body.movieMainPage ? req.body.movieMainPage : false;
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                movie.findById(req.body.movie_id, function (err, movieId) {
                    if (movieId.length == 0) {
                        res.json({ status: 1, message: "该电影ID不存在" });
                    } else {
                        var updateContent = {
                            movieName: req.body.movieName,
                            movieImg: req.body.movieImg,
                            movieVideo: req.body.movieVideo,
                            movieDownload: req.body.movieDownload,
                            movieTime: req.body.movieTime,
                            movieNumSuppose: req.body.movieNumSuppose,
                            movieNumDownload: req.body.movieNumDownload,
                            movieMainPage: movieMainPage
                        };
                        movie.update({ _id: req.body.movie_id }, updateContent, (err, movieData) => {
                            if (err) {
                                res.json({ status: 1, message: "电影更新失败" });
                            }
                            res.json({ status: 200, message: '电影更新成功', data: movieData });
                        })
                    }
                });

            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {get} /admin/movies 获取全部电影
 * @apiDescription 获取全部电影
 * @apiName movies
 * @apiGroup group
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/movies
 * @apiVersion 1.0.0
 */
router.get('/movies', function (req, res, next) {
    movie.findAll((err, movies) => {
        res.json({ status: 200, message: '获取全部电影', data: movies });
    })
});

/**
 * @api {get} /admin/commentList 获取全部评论
 * @apiDescription 获取全部评论
 * @apiName commentList
 * @apiGroup group
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/commentList
 * @apiVersion 1.0.0
 */
router.get('/commentList', function (req, res, next) {
    comment.findAll((err, comments) => {
        res.json({ status: 200, message: '获取全部评论', data: comments });
    })
});

/**
 * @api {post} /admin/checkComment 审核评论
 * @apiDescription 审核评论
 * @apiName checkComment
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} comment_id 评论Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/checkComment
 * @apiVersion 1.0.0
 */
router.post('/checkComment', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.comment_id) {
        res.json({ status: 100, message: '评论Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                comment.update({ _id: req.body.comment_id }, { check: true }, (err, commentData) => {
                    if (err) {
                        res.json({ status: 100, message: '审核失败', data: err });
                    }
                    res.json({ status: 200, message: '审核成功', data: commentData });
                })

            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {post} /admin/delComment 删除审核
 * @apiDescription 删除审核
 * @apiName delComment
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} comment_id 评论Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/delComment
 * @apiVersion 1.0.0
 */
router.post('/delComment', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.comment_id) {
        res.json({ status: 100, message: '评论Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                comment.remove({ _id: req.body.comment_id }, (err, commentData) => {
                    if (err) {
                        res.json({ status: 100, message: '删除失败', data: err });
                    }
                    res.json({ status: 200, message: '删除成功', data: commentData });
                })

            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {post} /admin/stopUser 用户停封
 * @apiDescription 用户停封
 * @apiName stopUser
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/stopUser
 * @apiVersion 1.0.0
 */
router.post('/stopUser', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                user.update({ _id: req.body.user_id }, { userStop: true }, (err, userData) => {
                    if (err) {
                        res.json({ status: 100, message: '用户停封失败', data: err });
                    }
                    res.json({ status: 200, message: '用户停封失败成功', data: userData });
                });

            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});


/**
 * @api {post} /admin/changeUser 用户密码更新
 * @apiDescription 用户密码更新
 * @apiName changeUser
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} new_pwd 新密码
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/changeUser
 * @apiVersion 1.0.0
 */
router.post('/changeUser', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.new_pwd) {
        res.json({ status: 100, message: '新密码为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                user.update({ _id: req.body.user_id }, { password: req.body.new_pwd }, (err, userData) => {
                    if (err) {
                        res.json({ status: 100, message: '密码更新失败', data: err });
                    }
                    res.json({ status: 200, message: '密码更新成功', data: userData });
                });

            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {post} /admin/showUsers 获取用户列表
 * @apiDescription 获取用户列表
 * @apiName showUsers
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/showUsers
 * @apiVersion 1.0.0
 */
router.post('/showUsers', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                user.findAll((err, data) => {
                    if (err) {
                        res.json({ status: 100, message: '获取用户列表失败', data: data });
                    }
                    res.json({ status: 200, message: '获取用户列表成功', data: data });
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {post} /admin/powerUpdate 修改用户为管理员
 * @apiDescription 修改用户为管理员
 * @apiName powerUpdate
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/powerUpdate
 * @apiVersion 1.0.0
 */
router.post('/powerUpdate', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                user.update({ _id: req.body.user_id }, { userAdmin: true }, (err, userData) => {
                    if (err) {
                        res.json({ status: 100, message: '修改用户为管理员失败', data: err });
                    }
                    res.json({ status: 200, message: '修改用户为管理员成功', data: userData });
                });
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }
    });
});

/**
 * @api {post} /admin/articleAdd 添加文章
 * @apiDescription 添加文章
 * @apiName articleAdd
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} articleTitle 文章名
 * @apiParam {string} articleContext 文章内容
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/articleAdd
 * @apiVersion 1.0.0
 */
router.post('/articleAdd', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.articleTitle) {
        res.json({ status: 100, message: '文章名为空' });
    }
    if (!req.body.articleContext) {
        res.json({ status: 100, message: '文章内容为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                var saveArticle = new article({
                    articleTitle: req.body.articleTitle,
                    articleContext: req.body.articleContext,
                    articleTime: Date.now()
                });
                saveArticle.save((err, result) => {
                    if (err) {
                        res.json({ status: 100, message: '添加文章失败', data: err });
                    } else {
                        res.json({ status: 200, message: '添加文章成功', data: result });
                    }
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })
});

/**
 * @api {post} /admin/articleDel 文章删除
 * @apiDescription 文章删除
 * @apiName articleDel
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} article_id 文章Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/articleDel
 * @apiVersion 1.0.0
 */
router.post('/articleDel', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.article_id) {
        res.json({ status: 100, message: '文章Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                article.remove({ _id: req.body.article_id }, (err, articleData) => {
                    if (err) {
                        res.json({ status: 100, message: '文章删除失败', data: articleData });
                    }
                    res.json({ status: 200, message: '文章删除成功', data: articleData });
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })
});


/**
 * @api {post} /admin/recommendAdd 添加推荐
 * @apiDescription 添加推荐
 * @apiName recommendAdd
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} recommendImg 推荐图片
 * @apiParam {string} recommendSrc 推荐跳转
 * @apiParam {string} recommendTitle 推荐标题
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/recommendAdd
 * @apiVersion 1.0.0
 */
router.post('/recommendAdd', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.recommendImg) {
        res.json({ status: 100, message: '推荐图片为空' });
    }
    if (!req.body.recommendSrc) {
        res.json({ status: 100, message: '推荐跳转为空' });
    }
    if (!req.body.recommendTitle) {
        res.json({ status: 100, message: '推荐标题为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                var saveRecommend = new recommend({
                    recommendImg: req.body.recommendImg,
                    recommendSrc: req.body.recommendSrc,
                    recommendTitle: req.body.recommendTitle
                });
                saveRecommend.save((err, result) => {
                    if (err) {
                        res.json({ status: 100, message: '添加推荐失败', data: err });
                    } else {
                        res.json({ status: 200, message: '添加推荐成功', data: result });
                    }
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })
});


/**
 * @api {post} /admin/recommendDel 推荐删除
 * @apiDescription 推荐删除
 * @apiName recommendDel
 * @apiGroup group
 * @apiParam {string} userName 用户名
 * @apiParam {string} token 令牌
 * @apiParam {string} user_id 用户Id
 * @apiParam {string} recommend_id 推荐Id
 * @apiSuccess {json} result
 * @apiSampleRequest http://localhost:3000/admin/recommendDel
 * @apiVersion 1.0.0
 */
router.post('/recommendDel', function (req, res, next) {
    if (!req.body.userName) {
        res.json({ status: 100, message: '用户名为空' });
    }
    if (!req.body.token) {
        res.json({ status: 100, message: '登录出错' });
    }
    if (!req.body.user_id) {
        res.json({ status: 100, message: '用户Id为空' });
    }
    if (!req.body.recommend_id) {
        res.json({ status: 100, message: '推荐Id为空' });
    }
    user.findByUserName(req.body.userName, (err, userData) => {
        var userPower = userData[0].userPower;
        if (userPower >= 1) {
            if (userData[0].userAdmin && !userData[0].userStop) {
                recommend.remove({ _id: req.body.recommend_id }, (err, recommendData) => {
                    if (err) {
                        res.json({ status: 100, message: '推荐删除失败', data: recommendData });
                    }
                    res.json({ status: 200, message: '推荐删除成功', data: recommendData });
                })
            } else {
                res.json({ status: 100, message: '你不是管理员或者账户已停用' });
            }
        } else {
            res.json({ status: 100, message: '你没有权限添加' });
        }

    })
});

module.exports = router;