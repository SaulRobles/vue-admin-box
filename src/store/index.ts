import { createStore, createLogger } from 'vuex'
import Persistent from './plugins/persistent'
import {userState} from "@/store/modules/user";
import {keepAliveState} from "@/store/modules/keepAlive";
import {appState} from "@/store/modules/app";
const debug = import.meta.env.MODE !== 'production'
const files= import.meta.globEager('./modules/*.ts')

export interface RootState {
  user: userState,
  keepAlive: keepAliveState,
  app: appState
}

let modules: any = {}
Object.keys(files).forEach((c: string) => {
  const module = files[c].default
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})

// Este es un complemento de almacenamiento local vuex，Todos los datos de vuex se almacenan de forma predeterminada
// La representación local se almacena en localStorage para almacenamiento permanente
// El representante de sesión se almacena en sessionStorage para almacenamiento temporal
// Ambos reciben una matriz de nombres de archivo para módulos, como：['app', 'keepAlive', 'user']
// Las recomendaciones de datos relacionados con el usuario se almacenan directamente en local，sessionHará que no lo obtenga cuando abra una nueva ventana token，porque session solo para la sesión actual
const persistent = Persistent({ key: 'vuex', modules, modulesKeys: {
  local: Object.keys(modules),
  session: []
} })

export default createStore<RootState>({
  modules: {
    ...modules
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistent] : [persistent]
})
