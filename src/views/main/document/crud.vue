<template>
  <div class="layout-container">
    <article>
      <section>
        <p>crud es la clave para el sistema de middle y back office empresarial, en este proyecto, integró varios conjuntos de modelos comunes de forma de tabla, si necesita participar en un CRUD, use directamente estas varias demostraciones para el desarrollo, que es extremadamente eficiente,
        Si no hay un estilo personalizado, lo más probable es que pueda completar una tabla en 20 minutos, así como eliminar, agregar y editar funciones, incluso si hay estilos personalizados, cambio de estado y similares, y luego agregar otros 10 minutos también se puede hacer,
        8 horas al día, asumiendo que el tiempo efectivo es de 4 horas, puede lograr un CRUD de 8 páginas al día, si elimina algunos requisitos comerciales para explorar el tiempo, un día 4 páginas de CRUD es más confiable, porque la certeza de este modelo, y la práctica en mi propio proyecto, puede reducir el número de generación de BUG a un rango muy pequeño, al menos en mi proyecto, los errores que aparecieron se han solucionado completamente antes de que se extrajera el modelo.</p>
        <p>Para el componente de tabla, utilizo la forma de encapsulación para asociar la tabla y la paginación para formar un conjunto de componentes de enlace de paginación de tabla que son fáciles de usar para solicitar uso, ya sea que se use para vincular formularios o simplemente para mostrar tablas, para la mayor parte del marco de back-end de vue3, este es un conjunto de soluciones de mejores prácticas, que también es un conjunto de cosas centrales promovidas por el sistema.</p>
        <p>Para los componentes de formulario, algunas funciones básicas también se encapsulan en forma de encapsulación, como: la función central de arrastrar y soltar, un conjunto de nuevas adiciones, procesos de edición, etc.</p>
        <p>En el futuro, se ampliarán más escenarios de aplicación, como：</p>
        <p>1. Muchos criterios de consulta se reducen y expanden</p>
        <p>2. Los datos tabulares se exportan a funciones como xls/csv</p>
        <p>3. Función de importación masiva de datos</p>
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
    padding: 0 20px;
    p {
      text-align: left;
      line-height: 25px;
    }
  }
</style>