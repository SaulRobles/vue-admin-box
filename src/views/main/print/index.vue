<template>
  <div class="layout-container">
    <div style="text-align: left; padding: 15px;">
      <el-button @click="print">打印</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const print = () => {
      let headerStr = `
        <html>
          <head>
            <title></title>
            <style>
              table,table tr th, table tr td { border:1px solid #000; }
              table { width: 100%; min-height: 30px; line-height: 30px; text-align: center; border-collapse: collapse; margin-bottom: 20px;}
            </style>
          </head>
        <body>
      `
      let footerStr = "</body></html>"
      let printData = `
        <h1 style="text-align: center;">orden de compra</h1>
        <div style="border-bottom: 1px solid #000; padding-bottom: 20px;">
          <div style="margin-right: 100px; display: inline-block;">El número de pedido ORD210000229</div>
          <div style="display: inline-block;">Fecha del pedido 2021-06-26</div>
        </div>
        <div style="padding: 10px 0;">
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">Proveedores otros fabricantes</div>
            <div style="display: inline-block; width: 49%;">Comprador Este es un nombre</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">Datos de contacto  123456789</div>
            <div style="display: inline-block; width: 49%;">Comprador Zhang San</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">Dirección Shangde suspendió la plantación de árboles de primavera crepúsculo flores a la deriva miles de nieve</div>
            <div style="display: inline-block; width: 49%;">Comprador Este es un nombre</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">Proveedores otros fabricantes</div>
            <div style="display: inline-block; width: 49%;">Comprador Este es un nombre</div>
          </div>
        </div>
        <table>
          <tr>
            <th>El número de producto</th>
            <th>El nombre del producto</th>
            <th>unidad</th>
            <th>cantidad</th>
            <th>precio por unidad</th>
            <th>importe</th>
            <th>Precio de venta al público</th>
            <th>Códigos de barras</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 Ropa de viaje antitabaco para damas</td>
            <td>artículo</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>El número de producto</th>
            <th>El nombre del producto</th>
            <th>unidad</th>
            <th>cantidad</th>
            <th>precio por unidad</th>
            <th>importe</th>
            <th>Precio de venta al público</th>
            <th>Códigos de barras</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 Ropa de viaje antitabaco para damas</td>
            <td>artículo</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>El número de producto</th>
            <th>El nombre del producto</th>
            <th>unidad</th>
            <th>cantidad</th>
            <th>precio por unidad</th>
            <th>importe</th>
            <th>Precio de venta al público</th>
            <th>Códigos de barras</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 Ropa de viaje antitabaco para damas</td>
            <td>artículo</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
      `
      let wind = window.open("", "Detalles del pedido",
					"toolbar=no,scrollbars=yes,menubar=no")
      wind.document.body.innerHTML = headerStr + printData + footerStr
      wind.print()
      console.log(123)
      wind.close()
    }
    return {
      print
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>