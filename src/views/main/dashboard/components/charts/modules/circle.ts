const option = {
  series: [
    {
      name: 'Acceder a la fuente',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '26',
          fontWeight: 'bold',
          formatter: (p) => {
            let dom = `<div backgroundColor="red">1</div>`
            return p.name + '\n' + p.value
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'motor de búsqueda' },
        { value: 735, name: 'Acceso directo' },
        { value: 580, name: 'Marketing por correo electrónico' },
        { value: 484, name: 'Publicidad de afiliados' },
        { value: 300, name: 'Anuncios de vídeo' }
      ]
    }
  ]
};

export default option