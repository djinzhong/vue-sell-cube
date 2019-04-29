const Mock = require('mockjs')
module.exports = function () {
  return {
    seller: Mock.mock({
      'record|10': [
        {
          'name|1': '@cname',
          'data': '@date(2019-04-dd)',
          'img': '@image(200x200)',
          'time': '@time()',
          'color': '@color'
        }
      ]
    })
  }
}
