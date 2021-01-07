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
当前 路径/html和/assets下为静态文件，开启服务后可直接访问，其他路径会代理到9998端口下的node服务