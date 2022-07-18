<template>
  <div>
    <el-card shadow="hover" class="box-card">
      <template #header>
        <div style="text-align: left;"><h2>Serie de elementos</h2><span>El grupo de botones utilizado de forma predeterminada dentro del marco admite el control de tamaño en la parte superior derecha</span></div>
      </template>
      <el-row>
        <el-button>El botón predeterminado</el-button>
        <el-button type="primary">Botón principal</el-button>
        <el-button type="success">Botón Éxito</el-button>
        <el-button type="info">Botón Información</el-button>
        <el-button type="warning">Botón de advertencia</el-button>
        <el-button type="danger">Botón peligro</el-button>
      </el-row>
      <el-row>
        <el-button plain>Botón ingenuo</el-button>
        <el-button type="primary" plain>Botón principal</el-button>
        <el-button type="success" plain>Botón Éxito</el-button>
        <el-button type="info" plain>Botón Información</el-button>
        <el-button type="warning" plain>Botón de advertencia</el-button>
        <el-button type="danger" plain>Botón peligro</el-button>
      </el-row>
      <el-row>
        <el-button round>Botón de esquinas redondeadas</el-button>
        <el-button type="primary" round>Botón principal</el-button>
        <el-button type="success" round>Botón Éxito</el-button>
        <el-button type="info" round>Botón Información</el-button>
        <el-button type="warning" round>Botón de advertencia</el-button>
        <el-button type="danger" round>Botón peligro</el-button>
      </el-row>
      <el-row>
        <el-button :icon="Search" circle></el-button>
        <el-button type="primary" :icon="Edit" circle></el-button>
        <el-button type="success" :icon="Check" circle></el-button>
        <el-button type="info" :icon="Message" circle></el-button>
        <el-button type="warning" :icon="Star" circle></el-button>
        <el-button type="danger" :icon="Delete" circle></el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons'

</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 15px;
  }
</style>