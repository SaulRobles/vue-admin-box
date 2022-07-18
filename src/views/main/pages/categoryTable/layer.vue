<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="Nombre:" prop="name">
        <el-input v-model="form.name" placeholder="Por favor ingresa un nombre"></el-input>
      </el-form-item>
      <el-form-item label="Número:" prop="number">
        <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="Solo se pueden ingresar enteros positivos"></el-input>
      </el-form-item>
			<el-form-item label="Selector:" prop="select">
			  <el-select v-model="form.choose" placeholder="Por favor elige" clearable>
					<el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
      <el-form-item label="Caja individual:" prop="radio">
        <el-radio-group v-model="form.radio">
          <el-radio v-for="item in radioData" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import { defineComponent, ref } from 'vue'
import { add, update } from '@/api/table'
import { selectData, radioData } from './enum'
import Layer from '@/components/layer/index.vue'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup(props, ctx) {
    const ruleForm: Ref<ElFormItemContext|null> = ref(null)
    const layerDom: Ref<LayerType|null> = ref(null)
    let form = ref({
      name: ''
    })
    const rules = {
      name: [{ required: true, message: 'Por favor escriba su nombre', trigger: 'blur' }],
      number: [{ required: true, message: 'Por favor ingrese números', trigger: 'blur' }],
      choose: [{ required: true, message: 'Por favor elige', trigger: 'blur' }],
      radio: [{ required: true, message: 'Por favor elige', trigger: 'blur' }]
    }
    init()
    function init() { // Se utiliza para determinar si agregar o editar funciones
      if (props.layer.row) {
        form.value = JSON.parse(JSON.stringify(props.layer.row)) // Use este interruptor directamente para pequeñas cantidades
      } else {

      }
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      selectData,
      radioData
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.layer.row) {
              this.updateForm(params)
            } else {
              this.addForm(params)
            }
          } else {
            return false;
          }
        });
      }
    },
    // Agregar evento de envío
    addForm(params: object) {
      add(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: 'Agregado exitosamente'
        })
        this.$emit('getTableData', true)
        this.layerDom && this.layerDom.close()
      })
    },
    // Editar enviar evento
    updateForm(params: object) {
      update(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: 'Editado con éxito'
        })
        this.$emit('getTableData', false)
        this.layerDom && this.layerDom.close()
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>