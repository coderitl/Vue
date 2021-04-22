##  问题描述

```bash
在 webpack 配置 es6 打包后,安装 vue 模块化开发时, 出现错误: Uncaught TypeError: Cannot read property '_init' of undefined
```

##   Vue

+ 安装`vue`

  ```bash
  npm install vue --save
  ```

+ `main.js`

  ```javascript
  Vue({
      el:"#app",
      template:`<div> {{message}}</div>`,
      data:{
          message:"HelloWebpack-Vue"
      }
  })
  ```

+ `Es6`依赖

  ```bash
  npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
  ```

  