import XButton from './button/index.js'
import XIcon from './icon/index'
// 总的样式
// import '../style/index.scss'
import '../style/index.scss'

const components = [
  XButton,
  XIcon
]

const install = function (Vue) {
  // eslint-disable-next-line no-useless-return
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  XButton,
  XIcon
}
