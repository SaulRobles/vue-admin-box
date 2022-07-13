import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { baidu } from './utils/system/statistics'
import 'element-plus/theme-chalk/display.css' // Presenta una clase oculta basada en puntos de interrupción
import 'element-plus/dist/index.css'
import 'normalize.css' // Iniciar CSS
import './assets/style/common.scss' // 公共css
import './theme/modules/chinese/index.scss'
import App from './App.vue'
import store from './store'
import router from './router'
import { getAuthRoutes } from './router/permission'
import i18n from './locale'
if (import.meta.env.MODE !== 'development') { // Los entornos que no son de desarrollo llaman Baidu(Motor de busqueda chino) Statistics
  baidu()
}

/** El enrutamiento de permisos controla el método principal */
getAuthRoutes()

const app = createApp(App)
app.use(ElementPlus, { size: store.state.app.elementSize })
app.use(store)
app.use(router)
app.use(i18n)
// app.config.performance = true
app.mount('#app')