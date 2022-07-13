declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// Declaración de internacionalización
declare module 'element-plus/lib/packages/locale/lang/zh-cn';
declare module 'element-plus/lib/packages/locale/lang/en';
