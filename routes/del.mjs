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

  const key = req.body.key;
  const value = req.body.value;

  //删
  mysql.query(`DELETE FROM ${req.body.tableName} where ${key}=${value}`, function (err, result) {
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