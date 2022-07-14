<template>
  <div class="layout-container">
    <h1>Configuración del menú Enrutamiento</h1>
    <article>
      <section>
        <p>La configuración de enrutamiento es la parte central de todo el sistema, y el diseño de toda la arquitectura se basa en el concepto de enrutamiento dinámico, que divide el enrutamiento.<b>La ruta subyacente</b> (Incluye 404 rutas, 401 rutas, rutas de inicio de sesión) +<b>Enrutamiento de páginas</b> (Enrutamiento de documentos, página de inicio, componente, página, etc.).
        El enrutamiento subyacente se inicializa tan pronto como el sistema entra, El enrutamiento de páginas, por otro lado, no se agrega a la página hasta que el sistema inicia sesión, Problemas como el acceso no autorizado se eliminan de manera efectiva. </p>
        <p>Todas las rutas deben preocuparse por la página principal：<b>router/index.ts</b> (La versión js es un archivo router/index.js), Este archivo contiene toda la configuración de la ruta, incluida la intercepción de inicio de sesión, la lógica para la adición de rutas dinámicas, etc. </p>
        <p>Cuando necesite controlar el enrutamiento en segundo plano, primero puede solicitar la interfaz de enrutamiento en segundo plano y, a continuación, comparar el enrutamiento dinámico local con los datos de enrutamiento de permisos generados en segundo plano. <b>variable asyncRoutes</b>，A continuación, puede generar sus propias rutas, incluidos nombres personalizados, rutas personalizadas, iconos personalizados, niveles de ruta personalizados, etc.</p>
        <h3>Una lista de parámetros de configuración comunes</h3>
        <ul>
          <li>path: Dirección de enrutamiento, requerida</li>
          <li>component: Requerido para el componente utilizado</li>
          <li>redirect: Dirección de redireccionamiento, opcional</li>
          <li>alwayShow: Tipo booleano, cuando solo hay un hijo, si se muestra el menú primario, true significa mostrar siempre, false significa no mostrar, el valor predeterminado es false</li>
          <li>meta: Los metadatos subyacentes, que es un objeto que incluye las siguientes propiedades
            <ul>
              <li>title: La versión no internacionalizada es<b>título</b>，La versión internacionalizada está disponible<b>función $t</b>Llamado<b>Cadenas de nivel de objeto</b>, Campos obligatorios</li>
              <li>icon: icono, no requerido</li>
              <li>cache: Tipo booleano, si habilitar la función de almacenamiento en caché, true significa activado, falso significa desactivado, predeterminado es falso, no es necesario, actualmente solo admite su uso en el menú de segundo nivel, temporalmente no admite el uso de menús de tres niveles y tres niveles (problema de la comunidad, por resolver)</li>
              <li>Metadatos personalizados para su uso en otros escenarios personalizados</li>
            </ul>
          </li>
          <li>children: Subrutas (si se requiere un subvario, el complejo padre debe ser el componente Diseño/Componente menú (como se ejemplifica en el archivo route/modules/menu.ts)/Componente padre personalizado)</li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  article {
    padding: 20px 50px;
    text-align: left;
    p {
      text-align: left;
      line-height: 29px;
      text-indent: 2em;
      margin-top: 0;
    }
    ul {
      li {
        margin-bottom: 20px;
        ul {
          margin-top: 20px;
        }
      }
    }
  }
</style>