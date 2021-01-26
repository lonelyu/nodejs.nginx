import Express from 'express';//加载express模块
import Mysql from 'mysql';
import _ from 'lodash';

const router = Express.Router();

router.get('/', function (req, res) {
  res.send({ code: 200, data: '请走post接口' });
});

router.post('/', function (req, res) {
  //创建连接
  const mysql = Mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1995919',
    database: 'test_zxy'
  });

  //执行连接 
  mysql.connect();

  const key = _.map(req.body.data, (item, key) => key);
  const value = _.map(req.body.data, (item, key) => item);
  const ex = value.map(() => '?');

  //增
  mysql.query(`INSERT INTO ${req.body.tableName}(${key.join(',')}) VALUES(${ex.join(',')})`, value, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      res.send({ code: 101, data: 'err', msg: err.message });
    } else {
      res.send({ code: 200, data: result });
    }
  });
  mysql.end();
});

export default router;