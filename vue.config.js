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
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'http-test',//项目名 这也是生成的exe文件的前缀名
        directories: {
          output: 'build'// 打包输出文件
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          // installerIcon: './icons/icon.ico',// 安装图标
          // uninstallerIcon: './icons/icon.ico',//卸载图标
          // installerHeaderIcon: './icons/icon.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: false,// 创建开始菜单图标
          artifactName: '${productName}_setup_${version}.${ext}' // 修改安装包的名字
          // shortcutName: 'icon' // 图标名称
          // include: 'build/script/installer.nsh', // 包含的自定义nsis脚本
        },
        win: {
          // icon: './icons/icon.ico',
          target: [
            {
              target: 'nsis',
              arch: [
                'ia32'
                // 'ia32', 'arm64', 'x64'
              ]
            }
          ]
        }
      }
    }
  }
}
