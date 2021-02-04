import Express from 'express';//加载express模块
import ExpressWs from 'express-ws';//加载express-ws模块

import chatRouter from './chat/index.mjs';

const router = Express.Router();
ExpressWs(router);

router.ws('/', function (ws, req) {
  ws.send('链接成功');
});

router.use(chatRouter);

export default router;