/**
 * @Author: djz
 * @Date: 2019-04-28
 * @Project: vue-sell-cube
 */
import Vue from 'vue'

/**
 * 将传入的字符串转换为驼峰写法
 * @param {String} string
 */
function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// 找到components文件夹下以.vue文件命名文件
const requireComponent = require.context(
  '.', false, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // 因为得到的filename格式是: './baseButton.vue',所以这里我们去掉头和尾,只保留真正的文件名
  const componenetName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )
  console.log(componenetName)
  Vue.component(componenetName, componentConfig.default || componentConfig)
})
