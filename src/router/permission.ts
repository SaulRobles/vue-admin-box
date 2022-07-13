/** Tipo de ingestión */
import type { Route } from './index.type'

/** Introducir recursos relacionados con el enrutamiento */
import router, { modules } from './index'
/** Introducir instancias vuex */
import store from '@/store'

/** El enrutamiento dinámico implementa los componentes subyacentes */
/** Presentar el Layout subconjunto */
import Layout from '@/layout/index.vue'
/** Presenta un componente de controlador de menú de varios niveles */
import MenuBox from '@/components/menu/index.vue'
/** Introducir componentes con nombres personalizados del sistema，conveniente keep-alive instrumento */
import { createNameComponent } from './createNode'

/** Introducido requiere permisos Modules */
import Dashboard from './modules/dashboard'
import Document from './modules/document'
import Component from './modules/component'
import Pages from './modules/pages'
import Menu from './modules/menu'
import Directive from './modules/directive'
import Chart from './modules/chart'
import SystemManage from './modules/systemManage'
import Print from './modules/print'
import Community from './modules/community'

/** Una ruta local que requiere una unión dinámica después del inicio de sesión */
const asyncRoutes: Route[] = [
  ...Dashboard,
  ...Document,
  ...Component,
  ...Pages,
  ...Menu,
  ...Directive,
  ...Chart,
  ...SystemManage,
  ...Print,
  ...Community,
]

/* 
 * se han agregado permisos para el enrutamiento dinámico，Para llamadas posteriores al inicio de sesión
 * Si necesita controlar el menú de la interfaz back-end，Por favor, obtenga el árbol de menú de backend con aquí asyncRoutes contraste，Genera un nuevo valor
 */
function addRoutes() {
  // Verificado completo，El código agregado a continuación se puede sincronizar con el menú en tiempo real，Se puede añadir setTimeout(() => {}) Simula el funcionamiento del código asincrónico
  // Simule problemas de datos de back-end con tablas de enrutamiento de front-end
  asyncRoutes.forEach(item => {
    modules.push(item)
    router.addRoute(item)
  })
}

/**
 * @des Este método se ejecuta después de iniciar sesión，Implementa la funcionalidad de enrutamiento dinámico
 */
export function getAuthRoutes() {
  // Si está presente y Existe el token, el método que agrega la ruta se llama
  if (store.state.user.token) {
    addRoutes()
  }
}
