/*
 * @Description: 全局配置
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-03-30 13:40:36
 * @LastEditors: John Holl
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  devServer: {
    proxy: {
      // 管理的接口
      '/aDeployApi/': {
        target: 'http://localhost:8089',
        ws: false,
        pathRewrite: {
          '^/aDeployApi/': '/aDeployApi/'
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'a-deploy',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
