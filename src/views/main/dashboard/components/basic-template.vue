<!--http://localhost:4173/#/dashboard-->
<!--Seccion que esta debajo de las etiquetas y arriba de las 4 mini tarjetas-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Plantilla base</span>
        <el-link type="primary" href="http://www.github.com/cmdparkour/vue-admin-box-template" target="_blank" style="margin-left: 20px;">dirección github</el-link>
      </div>
    </template>
      <div class="box">
        <div class="item">
          <h4>ts</h4>
          <p>La plantilla base para la versión ts, Sin internacionalización</p>
          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/ts" target="_blank">demo</el-link>
        </div>
        <div class="item">
          <h4>ts-i18n</h4>
          <p>La plantilla base para la versión ts, Internacionalización incluida</p>
          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/ts-i18n" target="_blank">demo</el-link>
        </div>
        <div class="item">
          <h4>js</h4>
          <p>La plantilla base para la versión js, Sin internacionalización</p>
          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/js" target="_blank">demo</el-link>
        </div>
        <div class="item">
          <h4>js-i18n</h4>
          <p>La plantilla base para la versión js, Internacionalización incluida</p>
          <el-link type="primary" href="http://vue-admin-box-template.51weblove.com/js-i18n" target="_blank">demo</el-link>
        </div>
      </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .box-card {
    .card-header{
      text-align: left;
    }
    .box {
      .item {
        display: flex;
        align-items: center;
        * {
          margin-right: 20px;
        }
      }
    }
  }
</style>