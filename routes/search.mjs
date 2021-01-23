import Express from 'express';//加载express模块
import Mysql from 'mysql';
import Url from 'url';
import _ from 'lodash';

const router = Express.Router();

router.get('/', function (req, res) {
  const params = Url.parse(req.url, true).query;
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
  
    //增
    mysql.query(`SELECT * FROM ${params.tableName}`,function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        res.send({ code: 101, data: 'success', msg: err.message });
      } else {
        res.send({ code: 200, data: result });
      }
    });
    mysql.end();
  
});

router.post('/', function (req, res) {
  res.send({ code: 200, data: '请走get接口' });
});

export default router;