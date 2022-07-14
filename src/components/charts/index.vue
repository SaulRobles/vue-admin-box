/**
* Instrucciones de uso: Los usuarios solo necesitan entrar options, options Consulte el ejemplo en el sitio web oficial options
* Este componente se introduce como un paquete completo echarts, Para la adaptación a todos los controles echarts
*/
<template>
  <div ref="chart" class="chart" />
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import * as echarts from 'echarts'
import { useEventListener } from '@vueuse/core'
const props = defineProps({
  option: Object
})
const chart: Ref<HTMLDivElement|null> = ref(null)
// En eventos montados para obtener el verdadero dom
onMounted(() => {
  const dom = chart.value
  if (dom) {
    let option: any = props.option
    // El objeto echarts debe inicializarse después de cargar el elemento Dom de la página
    let myChart = echarts.init(dom)
    myChart.setOption(option)
    // Escucha automática y destrucción automática
    useEventListener('resize', () => myChart.resize())
    watch(() => props.option, (newVal: any) => {
      myChart.setOption(newVal)
    })
  }
})
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>