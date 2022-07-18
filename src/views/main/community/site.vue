<template>
  <div class="layout-container">
    <div class="box">
      <div v-for="(item, key) in data" :key="key">
        <h3 style="text-align: left;">{{ item.name }}</h3>
        <el-row :gutter="20">
          <el-col v-for="row in item.data" :key="row.id" :lg="6" :md="8" :sm="12" :xs="24">
            <Card
              :row="row"
              background="#fff"
              :thumb="item.thumb"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/card.vue'
export default defineComponent({
  components: {
    Card
  },
  setup() {
    const data = [
      {
        name: 'Recursos oficiales',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2018/12/2018120516354293.jpg&h=284&w=284&zc=1',
        data: [
          { id: 1, name: 'vue3 documentación oficial', des: 'VUE3 última documentación china', link: 'https://v3.cn.vuejs.org/' },
          { id: 2, name: 'vue-router', des: 'Versión Vue3 del router VUE', link: 'https://next.router.vuejs.org' },
          { id: 3, name: 'vuex', des: 'Versión vue3 de vuex', link: 'https://next.vuex.vuejs.org/' },
          { id: 4, name: 'vite', des: 'Herramienta de empaquetado similar a Webpack', link: 'https://cn.vitejs.dev/' }
        ]
      },
      {
        name: 'Bibliotecas de componentes',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2021/06/colorful-rocks-1674179_960_720.jpg&h=284&w=284&zc=1',
        data: [
          { id: 1, name: 'element-plus', des: 'Biblioteca de componentes de interfaz de usuario de middle y back office, compatible con vue3', link: 'https://element-plus.gitee.io/#/zh-CN' },
          { id: 2, name: 'Vant', des: 'Biblioteca de componentes de interfaz de usuario móvil, compatible con vue3', link: 'https://youzan.github.io/vant/#/zh-CN/' },
          { id: 3, name: 'Vuetify', des: 'Biblioteca de componentes de la interfaz de usuario Vue de estilo material', link: 'https://next.vuetifyjs.com/zh-Hans/' },
          { id: 4, name: 'Naïve UI', des: 'vue3 Component Library Nueva Fuerza', link: 'https://www.naiveui.com/zh-CN' }
        ]
      },
      {
        name: 'Recursos adicionales',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2018/12/2018120512374712.jpg&h=284&w=248&zc=1',
        data: [
          { id: 1, name: 'vue-i18n', des: 'Soluciones internacionales', link: 'https://vue-i18n.intlify.dev/', img: 'https://vue-i18n.intlify.dev/vue-i18n-logo.png' },
          { id: 2, name: 'h5-dooring', des: 'Plataforma de código abierto de código bajo H5', link: 'https://github.com/MrXujiang/h5-Dooring', img: '' },
        ]
      }
    ]
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
    .el-col {
      margin-bottom: 10px;
    }
  }
</style>