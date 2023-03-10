import SvgIcon from '@/components/SvgIcon'
// 1. 导入所有的svg图标
// 2. 完成SvgIcon的全局注册

// 返回一个Require函数，可以接收一个request的参数，用于require的导入
// 该函数提供了三个属性，可以通过 svgRequire.keys()获得所有的svg图标
// 遍历图标，把图标作为request参数传入到svgRequire导入函数中，完成本地svg图标加载
const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  // 组件名字，组件实例
  app.component('svg-icon', SvgIcon)
}
