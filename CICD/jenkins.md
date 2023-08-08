# 使用docker的centos镜像容器安装jenkins

## 1、进入容器

`docker exec -it centos7 /bin/bash`

## 2、安装jenkins

```
// 安装jdk
wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.rpm
yum -y install ./jdk-17_linux-x64_bin.rpm

// 下载Jenkins仓库
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo --no-check-certificate
// 导入key
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

yum install jenkins

// 修改端口号、用户
vi /usr/lib/systemd/system/jenkins.service

// 启动jenkins
systemctl start jenkins

// 设置自动启动
systemctl enable jenkins

// 出现/etc/rc.d/init.d/jenkins: line 59: /etc/init.d/functions: No such file or directory错误

yum install -y initscripts

```


jenkins配置文件修改端口号、用户

```
Environment="JENKINS_PORT=8024"

User=root
Group=root
```