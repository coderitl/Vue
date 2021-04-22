前往:  <a href="https://lovobin.github.io/2021/04/17/2223.html">查看具体解决方案, webpack 处</a>

+ 拉取测试

  ```bash
  git clone -b webpackBug https://github.com/lovobin/Vue.git
  ```

+ 安装依赖

  ```bash
  npm install
  ```

+ `git`别名和分支

  ```bash
  git push webpack webpackBug
  ```


###  webpack 的具体使用

+ 安装

  ```bash
  npm install --save-dev less-loader less
  ```

####  `css,style,less`loader

+ 配置`mudule`

  ```bash
  module: {
          rules: [{
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader']
              }, # 之前文件所需 loader
              # 添加 less 后新增配置
              {
                  test: /\.less$/,
                  use: [{
                      loader: "style-loader" // creates style nodes from JS strings
                  }, {
                      loader: "css-loader" // translates CSS into CommonJS
                  }, {
                      loader: "less-loader" // compiles Less to CSS
                  }]
              }
          ]
      }
  ```

+ 执行`webpack 或 npm run build`

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/leeconfig.png" width="600" alt="成功打包less文件">

+ 网页结构

  <img src="https://img-blog.csdnimg.cn/20210422100808867.gif" alt="webapck-打包，main中引入bundle.js">



####  img

+ 未安装依赖

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/imgloader.png">

####  使用注意事项

```bash

main.js 进行 文件依赖  webpack.config.js配置文件中配置时,注意 use 顺序,[从右至左]

```



