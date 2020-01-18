## 前台页面

[学习地址](https://jspang.com/detailed?id=52#toc38 "教程地址")

-环境搭建

``` 
    npm install -g create-next-app
    npx create-next-app blog

    npm install -g create-next-app
    npx create-next-app blog

    cd blog
    yarn dev 运行
 ```

- 让Next支持CSS文件 安装@zeit/next-css

``` 
    yarn add @zeit/next-css
```

    

- 安装antd 框架
``` 
        yarn add antd babel-plugin-import 
``` 
- 配置
> 根目录新建.babelrc

## 后台接口
`
    安装
        npm i egg-init -g

    新建项目文件egg_service, 
        cd egg_service

    初始化
        egg-init --type=simple

    安装依赖
        npm install

    启动项目
        yarn dev

    app 下面可新建的文件夹
        view   模版文件夹
        extend  扩展文件夹
        middleware  中间件(路由守卫)

    安装markdown
        react-markdown
        markdown-navbar

    RESETful 简单 约束
        请求方式 GET POST PUT DELETE

    数据库使用的库
        yarn add egg-mysql
        
    服务端解决跨域
        yarn add egg-cors
        
    代码高亮
        yarn add marked highlight.js

`