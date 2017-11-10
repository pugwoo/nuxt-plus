
/*---------- START ----------*/
/********** DO NOT MODIFY **********/
// 为JS和Vue文件定制babel配置。https://nuxtjs.org/api/configuration-build/#analyze
module.exports.build.babel = {
  presets: ['es2015', 'stage-2'],
  plugins: [
    'transform-async-to-generator',
    'transform-runtime'
  ],
  comments: true
}
// 插入css自动补全
module.exports.build.postcss = [
  require('autoprefixer')({
    browsers: ['last 3 versions']
  })
]
// 设置缓存组件数量及时间
module.exports.cache.max = 10
module.exports.cache.maxAge = 1000 * 60 * 10

// 设置全局css
module.exports.css.push({ src: '~/assets/scss/app.scss', lang: 'scss' })

// 设置开发环境判断值
module.exports.dev = (process.env.NODE_ENV !== 'production')

// 设置生产环境变量
module.exports.env.baseUrl = process.env.BASE_URL || 'http://localhost:3000'

// 开启离线应用
module.exports.offline = true

// 添加插件
// 1.添加全局过滤器
module.exports.plugins.push({ src: '~/plugins/filters.js' })
// 2.添加google统计
module.exports.plugins.push({ src: '~/plugins/ga.js', ssr: false })
// 3.添加复制事件后插入版权声明
module.exports.plugins.push({ src: '~/plugins/copy-right.js', ssr: false })
// 4.添加百度seo自动push脚本
module.exports.plugins.push({ src: '~/plugins/baidu-seo-push.js', ssr: false })
// 5.添加开启离线应用
module.exports.plugins.push({ src: '~/plugins/offline.js', ssr: false })

// 添加路由中间件
router.middleware.push('ssr-cookie')
/********** DO NOT MODIFY **********/
/*---------- END ----------*/