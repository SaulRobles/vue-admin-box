<template>
  <div class="layout-container">
    <div class="layout-container-table" v-waterMarker>
      Soy una página de marca de agua
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WaterMarker from '@/directive/waterMarker'
export default defineComponent({
  directives: {
    WaterMarker
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>

</style>