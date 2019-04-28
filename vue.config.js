const appData = require('./mock')
const user = appData()
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
    'before': function (app) {
      app.get('/some/path', function (req, res) {
        res.json({
          error: 0,
          data: user
        })
      })
    }
  }
}
