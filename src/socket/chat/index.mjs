import Express from 'express';//加载express模块
import ExpressWs from 'express-ws';//加载express-ws模块
import axios from 'axios';
import moment from 'dayjs';

const router = Express.Router();
ExpressWs(router);

router.ws('/chat', function (ws, req) {
  axios.get('http://127.0.0.1:9999/search',{
    params:{
      tableName: 'chat_list'
    }
  }).then(res => {
    ws.send(JSON.stringify(res.data.data));
  });
  ws.on('message', function (jsonMsg) {
    const msg = JSON.parse(jsonMsg);
    axios.post('http://127.0.0.1:9999/add', {
      tableName: 'chat_list',
      data: {
        content: msg.content,
        createdName: msg.createdName,
        createdTime: moment().format('YYYY-MM-DD HH-mm-ss')
      }
    }).then(() => {
      ws.send(JSON.stringify([{ content: msg.content, createdName: msg.createdName }]));
    })
  })
});

export default router;