// 1. para resolver keep-alive necesitar name El problema，Generar aleatoriamente dinámicamente name por keep-alive usar
// 2. para resolver transition El problema de que el nodo interno de la animación solo puede ser el elemento raíz.，Un solo archivo puede escribir varios nodos
import type { DefineComponent, Component } from 'vue'
import { defineComponent, h, createVNode, ref, nextTick } from 'vue'
import reload from './reload.vue'
import NProgress from '@/utils/system/nprogress'

export function createNameComponent(component: () => Promise<any>): () => Promise<DefineComponent<{}, {}, any>> {
  return () => {
    return new Promise((resolve) => {
      component().then((comm: DefineComponent<{}, {}, any>) => {
        const name = (comm.default.name || 'vueAdminBox') + '$' + Date.now();
        const tempComm = defineComponent({
          name,
          setup() {
            const isReload = ref(false);
            let timeOut: any = null;
            const handleReload = () => {
              isReload.value = true;
              timeOut && clearTimeout(timeOut);
              NProgress.start();
              timeOut = setTimeout(() => {
                nextTick(() => {
                  NProgress.done();
                  isReload.value = false;
                });
              }, 260);
            };
            return {
              isReload,
              handleReload
            };
          },
          render: function () {
            if (this.isReload) {
              return h('div', { class: 'el-main-box' }, [h(reload)]);
            } else {
              return h('div', { class: 'el-main-box' }, [createVNode(comm.default)]);
            }
          }
        });
        resolve(tempComm);
      });
    });
  }
}

