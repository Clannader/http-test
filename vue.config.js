const path = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: '9085',
  },
  chainWebpack: config => {
    // 设置路径名的别名引用
    config.resolve.alias.set('components', resolve('src/components'))
  },
  configureWebpack: config => {
    const isProd = process.env.NODE_ENV === 'production'
    const plugins = []
    if(isProd){
      const uglify = new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        },
        sourceMap: false,
        parallel: true
      })
      plugins.push(uglify)
    }

    config.plugins = [
      ...config.plugins,
      ...plugins
    ]

  },
  pages: {
    index: {
      entry: [
        resolve('src/main.js')
      ],
      title: 'HttpTestTool'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/style/color.scss";`
      }
    },
    //因为js会动态的加载出css，所以js文件包会比较大，那么需要提取css代码到文件. 这里我们只需要将css配置一下
    extract: true
  }
}
