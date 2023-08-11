# 一、使用docker安装jenkins

## 1、下载镜像

`docker pull jenkins/jenkins`

## 2、创建容器

-v /usr/bin/docker:/usr/bin/docker 挂载映射使jenkins容器可以共享宿主的docker环境

`docker run -d -u 0 -p 8041:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker --name jenkins jenkins/jenkins`

## 3、访问jenkins

浏览器输入`http://localhost:8041`

# 二、使用docker部署前端应用

## 1、Dockerfile创建node和nginx镜像jenkins_web

在项目根目录新建deploy目录，目录下新建Dockerfile和default.conf文件

Dockerfile

```
// 基于node:16.20-alpine镜像
FROM node:16.20-alpine
// 后续指令的工作目录
WORKDIR /apps
// 复制项目的package.json到工作目录
COPY package*.json /apps/
// 全局安装pnpm并安装依赖
RUN npm i pnpm -g && pnpm i --ignore-scripts
// 将项目拷贝到工作目录下
COPY . /apps
// 运行build:s-test脚本
RUN npm run build:s-test

// 基于nginx镜像
FROM nginx
// 复制构建后的文件到nginx的根目录
COPY --from=0 /apps/dist /usr/share/nginx/html/
// 复制nginx配置文件
COPY --from=0 /apps/deploy/default.conf /etc/nginx/conf.d/default.conf

```

default.conf

```
server{
  listen 8021 default_server;
  listen [::]:8021 default_server;
  root /usr/share/nginx/html;
  try_files  $uri $uri/ /index.html;
}

```

## 2、jenkins配置

### 2.1、配置git仓库

安装git插件，配置git仓库和用户名/密码

### 2.2、配置构建触发的shell脚本

```
#!/bin/bash
# 先删除之前的容器和镜像文件
if [ "$(docker ps -a | grep jenkins_react)" ]; then
    docker stop jenkins_react
    docker rm jenkins_react
fi
if [ "$(docker images -q jenkins_web)" ]; then
    docker rmi jenkins_react
fi

# 重新生成镜像
docker build -f deploy/Dockerfile -t jenkins_react .
# 重新创建容器
docker run -itd -p 8021:8021 --name jenkins_react jenkins_react
```