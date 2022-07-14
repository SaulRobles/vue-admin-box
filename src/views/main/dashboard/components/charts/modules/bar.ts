var xAxis_data = ["Mes 01", "Mes 02", "Mes 03", "Mes 04", "Mes 05", "Mes 06", "Mes 07", "Mes 08", "Mes 09", "Mes 10", "Mes 11", "Mes 12"]
var data_A = [820, 932, 901, 934, 1290, 1330, 1320, 720, 832, 501, 334, 990]
var data_B = [720, 832, 501, 334, 990, 830, 720, 620, 732, 801, 1134, 908]
var data_C = [620, 732, 801, 1134, 908, 930, 920, 820, 932, 901, 934, 1290]
var names = ['2018 Gastos administrativos reales anuales', '2019 Costos presupuestarios anuales', '2020 El presupuesto anual de uso real']
var color = ['#4D8EFF', '#84BFFF', '#FE9D9A']

const option = {
  tooltip: {
    trigger: 'axis',
    // formatter: '{b}<br />{a2}:{c2}%<br />{a1}:{c1}%<br />{a0}:{c0}%'
    formatter: function (params, ticket, callback) {
      var htmlStr = '';
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var xName = param.name;//El nombre del eje x
        var seriesName = param.seriesName;//Nombre de la leyenda
        var value = param.value;//Valor del eje y
        var color = param.color;//Color de leyenda
        if (i === 0) {
          htmlStr += xName + '<br/>';//El nombre del eje x
        }
        htmlStr += '<div>';
        htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';//Un punto
        htmlStr += seriesName + ': ' + value + '万元';//El texto que aparece después del punto
        htmlStr += '</div>';
      }
      return htmlStr;
    }
  },
  grid: {       //Márgenes
    top: '20%',
    left: '1%',
    right: '1%',
    bottom: '1%',
    containLabel: true
  },
  legend: {      // Leyenda
    top: '5%',
    // right:'20%',
    data: names
  },

  xAxis: {
    type: 'category',
    data: xAxis_data,
    axisLine: {//Líneas de coordenadas
      lineStyle: {
        type: 'solid',
        color: '#E3E3E3', //El color de la línea de cuadrícula
        width: '2' //El ancho de la línea de coordenadas
      }
    },
    axisLabel: {
      formatter: '{value}',
    },
    textStyle: {
      fontSize: 12,
      fontFamily: 'PingFang SC',
      fontWeight: 400,
      lineHeight: 17,
      color: '#646464', //Valores de coordenadas para el color específico
      opacity: 1,
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {//línea
      show: false
    },
    axisTick: {//Escama
      show: false
    },
    axisLabel: {
      formatter: '{value}',
    },
    textStyle: {
      fontSize: 12,
      fontFamily: 'PingFang SC',
      fontWeight: 400,
      lineHeight: 17,
      color: '#979A9F', //Valores de coordenadas para el color específico
      opacity: 1,
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        width: 2,
        color: ['#E3E3E3'] //El color de la línea divisoria
        // color: ['#5d5d5d'] //El color de la línea divisoria
      }
    }
  },
  series: [
    {
      type: 'bar',
      name: names[1],
      data: data_A,
      symbolSize: 9, //Establece el tamaño del punto de inflexión
      itemStyle: {
        color: color[0]
      },
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'Discontinua 'solid' Líneas sólidas
      }
    }, {
      type: 'bar',
      name: names[2],
      data: data_B,
      symbolSize: 9, //Establece el tamaño del punto de inflexión
      itemStyle: {
        color: color[1]
      },
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'Discontinua 'solid'Líneas sólidas
      }
    }, {
      type: 'line',
      name: names[0],
      data: data_C,
      symbolSize: 9, //Establece el tamaño del punto de inflexión
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#fe9d9a66' // 0% El color del lugar
          }, {
            offset: 1, color: '#fe9d9a00' // 100% El color del lugar
          }],
          global: false // El valor predeterminado es false
        }
      },
      color: color[2], //Establecer el color
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'Discontinua 'solid'Líneas sólidas
      }
    },
  ]
}

export default option