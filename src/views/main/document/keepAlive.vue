<template>
  <div class="layout-container">
    <h1>keep-alive功能的使用</h1>
    <article>
      <section>
        <p>El proyecto actual ha implementado páginas en caché keep-alive son,<b>Tabla de vinculación de clasificación</b>、<b>Tabla de vinculación de árbol</b>、<b>Una lista de tarjetas</b>. </p>
        <p>Importante: Los desarrolladores no necesitan configurar varios nombres, solo configuraciones en el archivo de administración de rutas<b> cache：true</b> Eso es todo, eso es lo único en lo que hay que centrarse para implementar keep-alive.</p>
        <p>El sistema gestiona automáticamente los componentes necesarios para mantener vivo.</p>
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
  .layout-container {
    article {
      padding: 0 20px;
      p {
        text-align: left;
      }
    }
  }
</style>