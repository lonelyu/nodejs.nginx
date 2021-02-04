# 说明
nginx+nodejs+express 搭的服务

# 安装依赖
```
yarn
```

# 运行
```
yarn start
``` 

## 相关指令 
# 启动nginx
cd nginx-1.18.0 start nginx 
# 更改配置重启nginx
cd nginx-1.18.0 ./nginx.exe -s reload
# 退出nginx
cd nginx-1.18.0 ./nginx.exe -s quit

### nginx相关配置
nginx>conf>nginx.conf  
可修改端口 

### 路由分配
/html和/assets下为静态文件，指向nginx-1.18.0/html和nginx-1.18.0/assets,开启服务后可直接访问，由nginx直接输出

注:其他路径会代理到9998端口下的node服务

/api 指向src/api目录 写的一些普通接口

/socket 指向src/socket目录，存放socket接口

/add 指向routes/add.mjs，数据库添加操作
/del 指向routes/del.mjs，数据库删除操作
/edit 指向routes/edit.mjs，数据库修改操作
/search 指向routes/search.mjs，数据库查询操作