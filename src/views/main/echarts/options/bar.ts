import * as echarts from 'echarts/core'
var dataAxis = ['punto', 'golpe', 'Exponer', 'niño', 'o', 'el que', 'Dos', 'dedo', 'en', 'Toque', 'escudo', 'encima', 'resbaloso', 'mover', 'Sí', 'bastante', 'propio', 'mover', 'encogerse', 'poner'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
const options = {
  title: {
    text: 'Ejemplo de característica: Zoom de clic de sombra degradado',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click, Zoom'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
    },
    textStyle: {
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      
    },
    textStyle: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {offset: 0, color: '#83bff6'},
            {offset: 0.5, color: '#188df0'},
            {offset: 1, color: '#188df0'}
          ]
        )
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#2378f7'},
              {offset: 0.7, color: '#2378f7'},
              {offset: 1, color: '#83bff6'}
            ]
          )
        }
      },
      data: data
    }
  ]
}

export default options