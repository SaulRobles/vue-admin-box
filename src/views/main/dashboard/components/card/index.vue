<!--http://localhost:3001/#/dashboard-->
<!--Creacion e Injeccion de tarjetas que estan antes de las graficas-->

<template>
  <div class="card-list">
    <Row v-for="row in list" :key="row.id" :row="row" /> <!--import Row from './row.vue'-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Row from './row.vue'
export default defineComponent({
  components: {
    Row
  },
  setup() {
    const list = [
      { id: 1, name: 'Número de visitantes', data: '20055', color: '#4e73df', icon: 'sfont system-yonghu' },
      { id: 2, name: 'Información actualizada', data: '20', color: '#1cc88a', icon: 'sfont system-xiaoxi' },
      { id: 3, name: 'Cantidad de inventario', data: '20000', color: '#36b9cc', icon: 'sfont system-shuliang_mianxing' },
      { id: 4, name: 'Ingresos del mes', data: '20,000', color: '#f6c23e', icon: 'sfont system-jindutiaoshouyidaozhang' }
    ]
    return {
      list
    }
  }
})
</script>

<style lang="scss" scoped>
  .card-list {
    width: calc(100% + 20px);
    margin-left: -10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>