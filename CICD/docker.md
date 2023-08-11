# 一、docker本地创建容器、镜像

## 1、下载centos7镜像

`docker pull centos:7`

## 2、创建容器

-d, --detach=false， 指定容器运行于前台还是后台，默认为false
-i, --interactive=false， 打开STDIN，用于控制台交互
-t, --tty=false， 分配tty设备，该可以支持终端登录，默认为false
--privileged， 指定容器是否为特权容器，特权容器拥有所有的capabilities
--name，容器名字
-p, --publish=[]， 指定容器暴露的端口

`docker run -itd --privileged --name centos7 -e "container=docker" --restart "always" -p 8022:8022 -p 8023:8023 -p 8024:8024  centos:7  /usr/sbin/init`

## 3、进入容器

`docker exec -it centos7 /bin/bash`

## 4、centos安装nginx

```
// 添加CentOS 7 EPEL repository
yum install epel-release

// 安装nginx
yum install nginx

// 使用 docker-systemctl-replacement替换容器中的systemctl
// 安装wget
yum install wget

// 下载替换systemctl
wget https://raw.githubusercontent.com/gdraheim/docker-systemctl-replacement/master/files/docker/systemctl.py -O /usr/bin/systemctl

// 设置权限
chmod a+x /usr/bin/systemctl

// 启动nginx
systemctl start nginx

// 设置开机启动
systemctl enable nginx

// 查看nginx状态
systemctl status nginx

// 修改nginx配置
vi /etc/nginx/nginx.conf
```

nginx配置如下：
```
server {
    listen       8022;
    listen       [::]:8022;
    server_name  _;
    root         /usr/share/nginx/html1;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
}
server {
    listen       8023;
    listen       [::]:8023;
    server_name  _;
    root         /usr/share/nginx/html2;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
}
server {
    listen       8023;
    listen       [::]:8023;
    server_name  _;
    root         /usr/share/nginx/html3;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
}
```

在`/usr/share/nginx`目录下创建`html1`、`html2`、`html3`文件夹并创建index.html

## 访问web页面

浏览器输入 http://localhost:8022、http://localhost:8023、http://localhost:8024

成功访问表示配置成功

## 转换容器为镜像

-a，提交的镜像作者；
-m，提交时的说明文字
868b3beb9a3d，容器id
dreamjser/centos-nginx-web:1，镜像仓库:标签

`docker commit -a 'dreamjser@gmail.com' -m 'first commit' 868b3beb9a3d dreamjser/centos-nginx-web:1`

## 镜像推送

`docker push dreamjser/centos-nginx-web:1`

# 二、web服务器下载镜像、创建容器

## 安装docker

```
curl -fsSL https://get.docker.com/ | sh

// 启动docker服务
systemctl start docker
// 开机自动启动
systemctl enable docker
 
```

## 下载镜像

```
docker pull dreamjser/centos-nginx-web:1
```

## 创建并启动容器

```
docker run -itd --privileged --name centos7 -e "container=docker" -p 8022:8022 -p 8023:8023 -p 8024:8024  dreamjser/centos-nginx-web:1  /usr/sbin/init
```

## 进入容器

```
docker exec -it centos7 /bin/bash
```

## 访问web页面

浏览器输入 http://192.168.194.50:8022、http://192.168.194.50:8023、http://192.168.194.50:8024

成功访问表示配置成功