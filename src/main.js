/**
 *  入口文件 main.js
 */

// 导入模块
const {
    add
} = require('./js/mathUtils.js');

// 依赖 Vue : npm install --save

// 定义模板

import Vue from "vue"
Vue({
    el: "#app",
    template: `
        <div> 
            <h1>{{message}}</h1>
            <button @click="shouMessage">按钮</button>
        </div>
        `,
    data: {
        message: "HelloWebpack"
    },
    methods: {
        shouMessage() {
            console.log('webpack-Vue配置成功');
        }
    }
});

console.log(add(10, 20));