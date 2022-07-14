<template>
  <div class="layout-container">
    <article>
      <section>
        <p>Cómo personalizar un conjunto de sus propios temas del sistema, este artículo le enseñará cómo implementar rápidamente un conjunto de temas personalizados en este sistema</p>
        <p>
          1. Primero, encuentras
          <b>src/theme/index.ts</b> Archivo, las tres configuraciones de temas en nuestro sistema están todas allí
          <b>style</b> En constantes, puede copiar un conjunto de temas y cambiarlos a su propio código de color.
        </p>
        <p>
          2. Si está utilizando una plantilla internacional, deberá prestar especial atención
          <b>locale/modules</b>debajo de cada paquete de idioma system.ts, Defina el nombre del tema por separado en la ubicación del objeto：
          <b>system/setting/style</b>
        </p>
        <p>
          3. Configure el nombre del tema, como：
          <b>default/light/dark</b>，Todos estos nombres están asignados a body blanco classNamePor lo tanto, incluso cuando el número actual de variables no satisface sus necesidades, incluso puede agregar directamente un archivo css para personalizar el estilo de todos los elementos, al que se puede hacer referencia:
          <b>theme/modules/dark.scss</b>La forma de escribir el archivo, después de escribir, en
          <b>theme/index.scss</b>底部引入即可。
        </p>
        <p>
          4. El sistema recopila automáticamente
          <b>src/theme/index.ts</b>Archiva el tema a continuación y muéstralo en la configuración del tema, de modo que lo único a lo que debes prestar atención cuando personalices el tema sea la carpeta del tema, si necesitas internacionalizarte, agrega una carpeta de configuración regional, además de no involucrar ninguna otra modificación de la carpeta.
        </p>
        <p>5. Esta medida asegura que la personalización del tema sea lo suficientemente simple como para que solo necesite copiar unas pocas líneas de código y cambiar el color.</p>
        <p>6. El tema de bricolaje es tan simple, date prisa y pruébalo.</p>
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
