# kubectl安装与使用

Kubectl是Kubernetes集群的命令行工具,用于对集群本身进行管理与控制。它可以用来部署应用程序,检查集群资源,创建、删除和更新组件等。

Kubectl命令的语法如下:

`kubectl [command] [type] [name] [flags]`

+ command: 指定要对资源执行的操作,如create、get、describe、delete等。
+ type: 指定资源类型,如pod、service、deployment等。
+ name: 指定资源的名称,名称大小写敏感。
+ flags: 指定可选参数,用于更详细地控制命令的行为。

Kubectl支持的资源类型很多,主要有:

+ Pod: Kubernetes的基本执行单元。
+ Service: 为Pod提供负载均衡和服务发现的抽象层。
+ Deployment: 用于部署和更新无状态应用。
+ StatefulSet: 用于部署和管理有状态应用。
+ Namespace: 用于隔离集群内的资源。
+ Secret: 用于存储和管理敏感信息,如密码、OAuth令牌和SSH密钥。
+ ConfigMap: 用于存储和管理应用程序需要的配置数据。
+ PersistentVolume & PersistentVolumeClaim: 用于存储卷的生命周期管理

kubectl的主要用途:

+ 部署和管理应用程序。
+ 检查集群和资源的状态。
+ 创建、删除和更新各种资源。
+ 执行日志和监控操作。
+ 进入容器和Pod进行诊断与排障。
+ 更新Kubernetes版本与参数。

## 1、下载最新发行版

`curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"`

## 2、安装 kubectl

`install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl`

将 kubectl 安装到目录 ~/.local/bin 中

```
chmod +x kubectl
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl
# 之后将 ~/.local/bin 附加（或前置）到 $PATH

```

## 3、查看版本信息

```
kubectl version --client --output=yaml
```