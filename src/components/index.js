//把components文件夹下的所有组件都进行全局注册
//通过插件方式注册
import Sku from './XtxSku/index.vue'
import ImageView from './ImageView/index.vue'

export const componentsPlugin = {
  install(app) {
    // app.component(组件名字,组件配置对象)
    app.component('XtxSku', Sku)
    app.component('XtxImageView', ImageView)

  }
}