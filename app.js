import Express from 'express';//加载express模块
import Logger  from 'morgan';//在控制台中，显示req请求的信息
import CookieParser  from 'cookie-parser';//在控制台中，显示req请求的信息
import BodyParser from 'body-parser';//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

import indexRouter from './src/api/index.js';

// 数据库路由信息（接口地址），存放在routes的根目录
import searchRoute from './routes/search.mjs';
import addRoute from './routes/add.mjs';
// import editRoute from './routes/edit.mjs';
// import delRoute from './routes/del.mjs';

const app = Express();

// 载入中间件
app.use(Logger('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());
app.use(Express.static('public'));

//配置路由，（'自定义路径'，上面设置的接口地址）
app.use('/', indexRouter);

app.use('/add', addRoute);//增
// app.use('/del', delRoute);//删
// app.use('/edit', editRoute);//改
app.use('/search', searchRoute);//查

// 错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(9998, function () {
  console.log('http://localhost:9998');
});
