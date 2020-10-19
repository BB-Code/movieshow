define({ "api": [
  {
    "type": "post",
    "url": "/admin/articleAdd",
    "title": "添加文章",
    "description": "<p>添加文章</p>",
    "name": "articleAdd",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleTitle",
            "description": "<p>文章名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleContext",
            "description": "<p>文章内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/articleAdd"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/articleDel",
    "title": "文章删除",
    "description": "<p>文章删除</p>",
    "name": "articleDel",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>文章Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/articleDel"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/changeUser",
    "title": "用户密码更新",
    "description": "<p>用户密码更新</p>",
    "name": "changeUser",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_pwd",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/changeUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/checkComment",
    "title": "审核评论",
    "description": "<p>审核评论</p>",
    "name": "checkComment",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/checkComment"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "get",
    "url": "/admin/commentList",
    "title": "获取全部评论",
    "description": "<p>获取全部评论</p>",
    "name": "commentList",
    "group": "group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/commentList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/delComment",
    "title": "删除审核",
    "description": "<p>删除审核</p>",
    "name": "delComment",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/delComment"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/movieAdd",
    "title": "添加电影",
    "description": "<p>添加电影</p>",
    "name": "movieAdd",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieImg",
            "description": "<p>电影图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieDownload",
            "description": "<p>电影下载链接</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieMainPage",
            "description": "<p>是否放首页(默认否)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/movieAdd"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/movieDel",
    "title": "删除电影",
    "description": "<p>删除电影</p>",
    "name": "movieDel",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movie_id",
            "description": "<p>电影Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/movieDel"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/movieUpdate",
    "title": "更新电影",
    "description": "<p>更新电影</p>",
    "name": "movieUpdate",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movie_id",
            "description": "<p>电影Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/movieUpdate"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "get",
    "url": "/admin/movies",
    "title": "获取全部电影",
    "description": "<p>获取全部电影</p>",
    "name": "movies",
    "group": "group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/movies"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/powerUpdate",
    "title": "修改用户为管理员",
    "description": "<p>修改用户为管理员</p>",
    "name": "powerUpdate",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/powerUpdate"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/recommendAdd",
    "title": "添加推荐",
    "description": "<p>添加推荐</p>",
    "name": "recommendAdd",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommendImg",
            "description": "<p>推荐图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommendSrc",
            "description": "<p>推荐跳转</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommendTitle",
            "description": "<p>推荐标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/recommendAdd"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/recommendDel",
    "title": "推荐删除",
    "description": "<p>推荐删除</p>",
    "name": "recommendDel",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommend_id",
            "description": "<p>推荐Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/recommendDel"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/showUsers",
    "title": "获取用户列表",
    "description": "<p>获取用户列表</p>",
    "name": "showUsers",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/showUsers"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/admin/stopUser",
    "title": "用户停封",
    "description": "<p>用户停封</p>",
    "name": "stopUser",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/admin/stopUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "后台管理"
  },
  {
    "type": "post",
    "url": "/articleDetail",
    "title": "获取文章详情",
    "description": "<p>获取文章详情</p>",
    "name": "articleDetail",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "article_id",
            "description": "<p>文章Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/articleDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "get",
    "url": "/mongooseTest",
    "title": "数据库链接测试",
    "description": "<p>数据库链接测试</p>",
    "name": "mongooseTest",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/mongooseTest"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "get",
    "url": "/showArticle",
    "title": "获取文章",
    "description": "<p>获取文章</p>",
    "name": "showArticle",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/showArticle"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "get",
    "url": "/showBanner",
    "title": "获取轮播图",
    "description": "<p>获取轮播图</p>",
    "name": "showBanner",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/showBanner"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "get",
    "url": "/showRanking",
    "title": "获取排行",
    "description": "<p>获取排行</p>",
    "name": "showRanking",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/showRanking"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "post",
    "url": "/showUser",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "showUser",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/showUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "首页管理"
  },
  {
    "type": "post",
    "url": "/users/download",
    "title": "用户下载",
    "description": "<p>用户下载</p>",
    "name": "download",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movie_id",
            "description": "<p>电影Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/download"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/postComment",
    "title": "用户评论",
    "description": "<p>用户评论</p>",
    "name": "postComment",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movie_id",
            "description": "<p>电影Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "context",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/postComment"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userMail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPhone",
            "description": "<p>手机</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/sendEmail",
    "title": "发送邮箱",
    "description": "<p>发送邮箱</p>",
    "name": "sendEmail",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toUserName",
            "description": "<p>电影Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>邮件标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>邮件内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/sendEmail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/showEmail",
    "title": "获取发送的站内信",
    "description": "<p>获取发送的站内信</p>",
    "name": "showEmail",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receive",
            "description": "<p>发送参数（1:发送,2:收到）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/showEmail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/support",
    "title": "用户点赞",
    "description": "<p>用户点赞</p>",
    "name": "support",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movie_id",
            "description": "<p>电影Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/support"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  },
  {
    "type": "post",
    "url": "/users/updatePassword",
    "title": "密码修改",
    "description": "<p>密码修改</p>",
    "name": "updatePassword",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userMail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userPhone",
            "description": "<p>手机</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/users/updatePassword"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/users.js",
    "groupTitle": "用户管理"
  }
] });
