const {
    resolve
} = require('path');
const path = require('path');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // 获取绝对路径
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            // 配置 css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 配置 less
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            // 配置 img
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        /* 
                        当加载的图片,小于 limit 时,会将图片编译成 base64字符串形式
                        当加载的图片,大于 limit 时,需要使用 file-loader 模块进行加载
                        */
                        limit: 8192,
                        name: 'img/[name].[hash:8].[ext]' // dist/img/原名称+8位数的hash值.扩展名
                    }
                }]
            },
            // Es6相关配置
            {
                test: /\.js$/,
                // exclude: 排除 include: 包含 
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
            // es6 结束
        ]
    },
    // webpack 配置 vue
    resolve: {
        // alias: 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
// current 当前的