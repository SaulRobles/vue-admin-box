<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div class="box">
        <el-button v-debounce="getData(123)" type="primary">Botón de estabilización</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import Debounce from '@/directive/debounce'
export default defineComponent({
  directives: {
    Debounce
  },
  setup() {
    const getData = (str)=> {
      return function() {
        console.log(str)
        ElMessage({
          type: 'success',
          message: 'Extracción de datos'
        })
      }
    }
    onUnmounted(() => {
      ElMessage.closeAll()
    })
    return {
      getData
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    .el-input {
      margin-right: 10px;
    }
  }
</style>