import gdMap from './mapData.json'
import * as echarts from 'echarts/core'
var nameMap = 'china';
// 0 indica no desarrollado y 1 indica en desarrollo
var data = [
  { name: 'Beijing', value: 1290 },
  { name: 'Tianjin', value: 42 },
  { name: 'Hebei', value: 1 },
  { name: 'Shanxi', value: 0 },
  { name: 'Mongolia Interior', value: 0 },
  { name: 'Liaoning', value: 0 },
  { name: 'Jilin', value: 0 },
  { name: 'Heilongjiang', value: 0 },
  { name: 'Shanghái', value: 1129 },
  { name: 'Jiangsu', value: 399 },
  { name: 'Chekiang', value: 102 },
  { name: 'Anhui', value: 1 },
  { name: 'Fujian', value: 299 },
  { name: 'Jiangxi', value: 302 },
  { name: 'Shandong', value: 1 },
  { name: 'Henan', value: 1 },
  { name: 'Hubei', value: 998 },
  { name: 'Hunan', value: 480 },
  { name: 'Chongqing', value: 1580 },
  { name: 'Sichuan', value: 372 },
  { name: 'Guizhou', value: 69 },
  { name: 'Yunnan', value: 695 },
  { name: 'Tíbet', value: 0 },
  { name: 'Shaanxi', value: 1 },
  { name: 'Gansu', value: 56 },
  { name: 'Qinghai', value: 10 },
  { name: 'Ningxia', value: 1 },
  { name: 'Xinjiang', value: 0 },
  { name: 'Guangdong', value: 1988 },
  { name: 'Guangxi', value: 1860 },
  { name: 'Hainan', value: 14 },
  { name: 'Hong Kong', value: 879 },
  { name: 'Macao', value: 209 },
  { name: 'Taiwán', value: 0 },
];

var geoCoordMap: any = {};
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

echarts.registerMap(nameMap, gdMap);
/*Obtiene los datos del mapa*/
var mapFeatures = echarts.getMap(nameMap).geoJson.features;
mapFeatures.forEach(function (v) {
  // El nombre de la región
  var name = v.properties.name;
  // Latitud y longitud de la región
  geoCoordMap[name] = v.properties.center;
});
const options = {
  backgroundColor: '#0F1C3C',
  title: [
    {
      top: '31.5%',
      text: 'Tamaño mensual',
      // subtext: 'Datos virtuales',
      left: '105',
      show: true,
      textStyle: {
        color: '#fff',
      },
    },
  ],
  tooltip: {
    position: function (p) {
      //donde p es la posición del ratón actual
      return [p[0] + 10, p[1] - 10];
    },
    extraCssText: 'max-height:40px;',
    triggerOn: 'mousemove|click',
    formatter: function (e, t, n) {
      if (typeof e.value[2] == 'undefined') {
        if (e.value == '0') {
          return e.name + ": <span style='color: #999;'>Subdesarrollado</span>";
        } else if (e.value == '1') {
          return e.name + ": <span style='color: blue;'>En desarrollo</span>";
        } else {
          return e.name + ": <span style='color: red;'>" + e.value + '</span> 万';
        }
      }
      //Cuando hay una cantidad, se muestra la ciudad y el número de proyectos realizados en la ciudad actual.
      else {
        return e.name + ": <span style='color: red;'>" + e.value[2] + '</span> diez mil'; //params.value[2]  Sacar el tercer valor en el valor Valor Los dos primeros valores son latitud y longitud, y el tercer valor es cantidad
      }
    },
  },
  visualMap: [
    {
      left: 90,
      bottom: '20%',
      min: 0,
      max: 1000,
      show: true,
      //   text: ['High', 'Low'],
      realtime: false,
      calculable: false,
      seriesIndex: [0],
      orient: 'horizontal',
      textStyle: {
        color: 'rgba(175,224,254,.9)',
      },
      pieces: [
        {
          gt: 3,
          label: 'Desarrollado',
          color: '#134B1C',
        },
        {
          gte: 1,
          lte: 1,
          label: 'En desarrollo',
          color: '#4A4003',
        },
        {
          gte: 0,
          lte: 0,
          label: 'Subdesarrollado',
          color: '#00336C',
        },
      ],
    },
    {
      left: 90,
      // top: this.chinaBox / 2 + 52,
      top: '30%',
      min: 0,
      max: 1000,
      seriesIndex: 1,
      show: true,
      splitNumber: 4,
      padding: [50, 20, 20, 20],
      backgroundColor: 'rgba(255,255,255,.2)',
      textStyle: {
        color: 'rgba(175,224,254,.9)',
      },
      inRange: {
        // color: ['#8B77FF', '#4FCCFF', '#6FE621', '#FFC760', '#FB497C'].reverse(),
        symbolSize: [8, 15],
        symbol: 'circle',
      },
      formatter: function (value) {
        return '';
      },
      pieces: [
        {
          gt: 1000,
          label: '1000 Más de 10.000',
          color: '#FB497C',
        },
        {
          gte: 500,
          lte: 1000,
          label: '500-1000 diez mil',
          color: '#FFC760',
        },
        {
          gte: 300,
          lt: 500,
          label: '300-500 diez mil',
          color: '#6FE621',
        },
        {
          gt: 100,
          lt: 300,
          label: '100-300 diez mil',
          color: '#4FCCFF',
        },
        {
          lt: 100,
          gt: 3,
          label: '100 Millones por debajo',
          color: '#DAB2FF',
        },
      ],
    },
  ],
  geo: {
    // Mapa de fondo
    map: nameMap,
    zoom: 1.2,
    show: false, // Si se debe mostrar un mapa de fondo
    roam: true,
    label: {
      show: false
    },
    emphasis: {
      label: {
        show: false
      }
    }
  },
  series: [
    {
      // Información sobre el bloque de mapas
      type: 'map',
      map: nameMap,
      zoom: 1.2,
      label: {
        show: true,
      },
      textStyle: {
        fontSize: 12,
        fontWeight: 400,
        color: 'rgb(255,255,255)',
      },
      itemStyle: {
        // Configuración del borde del mapa
        borderColor: 'rgba(175,224,254,.4)',
        fontWeightL: 700,
        borderWidth: 0.5,
      },
      // hover efecto
      emphasis: {
        label: {// Color de la portada del texto
          show: true, //Si la etiqueta se muestra en el estado resaltado.
        },
        textStyle: {
          color: '#ff0',
        }, //Etiquetar el estilo de texto en el estado resaltado.
        itemStyle: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00499B', // 0% El color del lugar
              },
              {
                offset: 1,
                color: '#00499B', // 100% El color del lugar
              },
            ],
            globalCoord: false, // El valor predeterminado es false
          }
        }
      },
      // Efectos de clic
      select: {
        itemStyle: {
          areaColor: '#ccb32c',
        },
      },
      data: data,
    },
    {
      // Ondulaciones de agua
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(
        data
          .sort(function (a, b) {
            return b.value - a.value;
          })
          .slice(0, 50)
      ),
      showEffectOn: 'render',
      // symbolOffset: [-10, 10], //compensar
      rippleEffect: {
        period: 10, // Tiempo de animación, cuanto menor sea el valor, más rápido será
        scale: 4, // El límite máximo del anillo de ondulación, cuanto mayor sea el valor, mayor será la ondulación
        brushType: 'fill', // Cómo se dibujan las ondas stroke, fill
      },
      zlevel: 2,
    },
  ],
};

export default options
