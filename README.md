# Vue 饿了吗外卖项目实战

## 1. 新建项目      
* vue create vue-sell-cube
* vue add cube-ui
* cd vue-sell-cube
* npm run serve
## 2. mock数据    
### 1. 安装 mockjs  
npm install mockjs --save-dev  
### 2. 创建 mock.js 文件  
```javascript
const Mock = require('mockjs')
module.exports = function () {
  return {
    user: Mock.mock({
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
```
### 3. 修改 vue.config.js  
```javascript
const appData = require('./mock')
const user = appData()
module.exports = {
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
```
### 4. 然后访问 location  
http://localhost:8080/some/path
