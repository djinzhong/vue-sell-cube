const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

/**
 * 地址拼接函数
 * @param {String} dir 需要拼接的地址
 * @returns {*}
 */
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          error: 0,
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          error: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          error: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  }
}
