/*
 * @Author: luoxi
 * @Date: 2022-01-25 09:51:12
 * @LastEditors: luoxi
 * @LastEditTime: 2022-01-25 12:25:51
 * @FilePath: \vue-admin-box\src\router\index.ts
 * @Description: 
 */
/**
 * @description Una lista de configuraciones de parámetros disponibles para todos
 * @params hideMenu: Si ocultar el nodo de enrutamiento actual y no mostrarlo en la navegación
 * @params alwayShow: Ya sea para mostrar siempre el menú cuando solo hay una ruta secundaria，defecto: false
 */
import { reactive } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import i18n from '@/locale'
import NProgress from '@/utils/system/nprogress'
import { changeTitle } from '@/utils/system/title'

NProgress.configure({ showSpinner: false })

// importar sin permiso modules
import System from './modules/system'

/** 
 * @name Inicializar las rutas necesarias
 * @description usar reactive hace atributos modules Puede responder en tiempo real en el menú de enrutamiento，Solucionar el problema del eco del menú.
 * @detail para modules cualquier modificación de，están sincronizados con el nivel de menú，recuerda，es para una variable llamada：moduels Modificaciones
 **/
let modules = reactive([
  ...System
])

const { t } = i18n.global

const router = createRouter({
  history: createWebHashHistory(),
  routes: modules
})

// Lista blanca para acceso no autorizado
const whiteList = ['/login']

// Operación de escucha antes del salto de enrutamiento
router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (store.state.user.token) {
    to.meta.title ? (changeTitle(to.meta.title)) : "" // dinámico title
    if (to.path === '/login') {
      next('/')
      return
    }
    next()
  } else if (whiteList.includes(to.path)) {
    to.meta.title ? (changeTitle(to.meta.title)) : "" // dinámico title
    next()
  } else {
    next("/login"); // 全部重定向到登录页
    to.meta.title ? (changeTitle(to.meta.title)) : "" // dinámico title
  }
});

// Operación de escucha después del salto de enrutamiento
router.afterEach((to, _from) => {
  const keepAliveComponentsName = store.getters['keepAlive/keepAliveComponentsName'] || []
  const name = to.matched[to.matched.length - 1].components.default.name
  if (to.meta && to.meta.cache && name && !keepAliveComponentsName.includes(name)) {
    store.commit('keepAlive/addKeepAliveComponentsName', name)
  }
  NProgress.done()
});

export {
  modules
}

export default router
