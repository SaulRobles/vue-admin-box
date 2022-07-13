import type { DefineComponent } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

/* El tipo de ruta subyacente */
export type Route = {
    /* Ruta de acceso */
    path: string
    /* Componentes que deben utilizarse @description: Dos tipos，El primero es el predeterminado Vue tipo de archivo，La segunda es a través de: createNameComponent Hecho a la vista，Lo que sea que un componente requiera keep-alive, Debe utilizarse createNameComponent Hagámoslo */
    component: DefineComponent<{}, {}, any> | (() => Promise<DefineComponent<{}, {}, any>>)
    /** @name Metadatos subyacentes */
    meta: Meta

    /** @name El nombre de la ruta，Único a nivel mundial，Sí, puedes dejarlo en blanco */
    name?: string
    /** @name La dirección que necesita ser redirigida，Opcional */
    redirect?: string
    /** @name El menú siempre se muestra，Opcional @description La mayoría de las veces es para el nodo raíz del menú de nivel dos, nivel tres, nivel cuatro，Si no lo configuras，Cuando solo hay un elemento secundario, el elemento secundario se muestra de forma predeterminada，Oculta el elemento primario */
    alwayShow?: boolean //@default false
    /** @name Si se debe ocultar el menú，Opcional @description Esta propiedad se utiliza normalmente para páginas de detalles、404、401 Las páginas, etc. no necesitan mostrarse en el menú general */
    hideMenu?: boolean //@default false
    /** @name Subconjuntos de enrutamiento，y Route Una matriz de tipos coherentes，Opcional */
    children?: Route[]
} & RouteRecordRaw

/** @name Una descripción del tipo de metadatos subyacentes */
export interface Meta {
    /** @name título @description Disponible para muchos lugares para usar，Utilizado en versiones internacionalizadas i18n El valor correspondiente，El valor de la ruta real se utiliza en la versión no internacionalizada */
    title: string
    /** @name El valor del icono utilizado，Opcional @description Corresponde a tu propia biblioteca de enlaces de Iconfont para entrar，Por lo general, solo se usa en menús de primer nivel，Pero no hay ningún problema con el uso del segundo nivel y el tercer nivel. */
    icon?: string
    /** @name Si es necesario almacenar en caché la página，Actualmente, solo se admite el almacenamiento en caché de menús L2，El almacenamiento en caché de menús de varios niveles será compatible en el futuro，Opcional */
    cache?: boolean //@default false
    /** @name Cualquier valor @description Para uso autoescalado，Pero se recomienda definirlo usted mismo en la parte superior. */
    [key: string]: any
}