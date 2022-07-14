<template>
  <div class="layout-container">
    <h1>Instrucciones de uso</h1>
    <p>Por qué los documentos se escriben dentro del sistema, Por un lado, es por pereza, Por otro lado, porque creo firmemente que si no me gusta, entonces todos no estarán contentos con él, por lo que la parte de documentación se coloca temporalmente aquí.</p>
    <div style="padding: 0 10px;"><basic-template /></div>
    <article>
      <h2>Breve introducción</h2>
      <p>vue-admin-box es un proyecto de gestión de segundo plano y medio de código abierto. La pila de tecnología principal es el depósito de la familia vue3, que incluye: vue3 (vue-next), vite, element-plus, vue-router, vuex, axios, vite- complemento: Mock y muchas otras tecnologías comunes en proyectos intermedios y de back-end.</p>
      <ol>
        <li>vue3(vue-next): La pila de tecnología central de este proyecto se utiliza para el control de módulos receptivos.</li>
        <li>vite: Ejecución de servicios locales, herramientas de empaquetado y compilación, características: ligeras y rápidas</li>
        <li>element-plus: biblioteca de componentes vue3</li>
        <li>vue-router: Complemento de control de enrutamiento, este proyecto ha realizado muchas adaptaciones para negocios reales</li>
        <li>vuex: Administrador de estado y escribió un complemento de caché local para su uso</li>
        <li>axios: Biblioteca de solicitud de datos, basada en esta encapsulación adicional</li>
        <li>vite-plugin-mock: Una biblioteca dedicada para datos simulados locales y en línea, la solicitud http real se puede ver localmente y la versión js se puede usar en línea para reemplazar</li>
      </ol>
      <h2>Optimización de crud</h2>
      <p>En pocas palabras, puede copiar directamente la carpeta del formulario comercial, cambiar el nombre, cambiar la interfaz, ajustar los detalles en él y puede usarlo directamente.</p>
      <p>Forma de negocio, este es el concepto central de este proyecto de código abierto. Basado en la situación en el proceso de desarrollo diario, he encapsulado un núcleo<b> Componente emergente</b> y un <b>componente de tabla</b>.</p>
      <p>En el desarrollo diario, agregar, eliminar, verificar y modificar es el núcleo y la función más importante. Para desarrollar de manera eficiente, se recomienda comprender estos dos componentes. Para obtener una demostración específica, consulte la página:
        <el-link type="primary" href="/#/pages/crudTable">formulario de negocio</el-link>、
        <el-link type="primary" href="/#/pages/categoryTable">Formulario de vinculación de clasificación</el-link>、
        <el-link type="primary" href="/#/pages/treeTable">formulario de enlace de árbol</el-link>
      </p>
      <h3>Componente emergente</h3>
      <p>Admite arrastrar y soltar de forma predeterminada y encapsula un conjunto de modos especialmente vinculados con los componentes de la tabla, que se pueden utilizar para un desarrollo rápido.</p>
      <h3>componente de formulario</h3>
      <p>Maneje la mayor parte de la tabla y la lógica de paginación en componentes comunes, listos para usar</p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basicTemplate from '@/views/main/dashboard/components/basic-template.vue'
export default defineComponent({
  components: {
    basicTemplate
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  article {
    padding: 20px 50px;
    text-align: left;
    ol {
      li {
        line-height: 30px;
      }
    }
  }
</style>