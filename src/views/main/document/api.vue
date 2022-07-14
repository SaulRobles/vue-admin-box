<template>
  <div class="layout-container">
    <h1>Documentación de la interfaz</h1>
    <article>
      <section>
        <p>Hay muchos socios pequeños que generalmente en el grupo a menudo harán algunas preguntas sobre la solicitud de datos del proyecto, aquí, escribiré un documento simple para presentarle qué solicitudes de datos estarán involucradas en este proyecto para su referencia.</p>
        <h2 style="margin-top: 40px;">Introducción a la encapsulación de solicitudes de datos</h2>
          <p>La encapsulación de solicitud de datos actual se basa en una encapsulación de la biblioteca axios, las principales son: <b>Tramitación pública antes de la solicitud</b>、<b>Procesamiento público después de la solicitud</b>Para ambos propósitos, consulte el documento：<b>src/utils/system/request.ts</b></p>
          <p>
            <b>Tramitación pública antes de la solicitud</b>
          </p>
          <p>En la actualidad, el proyecto lleva a cabo principalmente un preprocesamiento del token, y el usuario puede expandirse de acuerdo con su propio negocio, como: información de zona horaria, userId, ubicación del usuario y otros datos de procesamiento unificado, si los requisitos de cifrado son altos, puede cifrar los parámetros de solicitud aquí.</p>
          <p>
            <b>Procesamiento público después de la solicitud</b>
          </p>
          <p>Cuando se detecta un error, ya sea un error del servidor o un error de código, debe manejarse aquí de manera uniforme y luego usar la captura de The Shuttle para regresar a la ubicación de la llamada, lo que es propicio para mantener una alta capacidad de mantenimiento en el complejo modelo de negocio.</p>
        <h2 style="margin-top: 40px;">Cómo utilizar las solicitudes de interfaz en un proyecto</h2>
          <p>Algunas cosas a las que debemos prestar atención son las siguientes:
            <ul>
              <li>1. Optimice la reescritura de acuerdo con su propio tipo de negocio: src/utils/request.ts, Los proyectos simples pueden omitir este paso</li>
              <li>2. Todas las interfaces se colocan en carpetas: src/api/*, Todas nuestras solicitudes deben colocarse aquí, la forma específica de escribir, consulte el contenido del archivo</li>
              <li>3. Introduzca las funciones de interfaz correspondientes en la página y, a continuación, utilícelas, puede consultar: módulo de tabla de negocios</li>
              <li>4. Cada vez que llame, debe tener en cuenta la situación de que la interfaz devuelve una excepción, llevar a cabo el procesamiento de capturas, cada vez que debe hacer un juicio de tipo sobre los datos devueltos, por ejemplo, debe ser una matriz de datos, pero es probable que la interfaz devuelva un nulo para usted cuando está vacía, esta lógica debe ser procesada por el front-end, puede encapsularse el procesamiento, también se puede manejar de forma independiente, se recomienda negociar una buena especificación con el grupo backend y encapsular las operaciones de procesamiento.</li>
            </ul>
          </p>
        <h2 style="margin-top: 40px;">Cómo usar datos simulados</h2>
        <p>
          <b>Usar datos simulados locales</b>
        </p>
        <p>
          <ul>
            <li>1. Al usar datos simulados locales, podemos agregar un nuevo archivo en la carpeta: raíz del proyecto /mock/ para definir la función simulada, e introducirlo en el archivo: raíz del proyecto /mockProdServer.ts, porque la línea debe introducirse por sí misma (Nota: puede ser reemplazada por la introducción automática de la escritura en la etapa posterior)</li>
            <li>2. A continuación, escriba la llamada a la interfaz en: src/api/* y defina baseUrl como "/mock", que se puede hacer referencia al archivo src/api/user.ts</li>
            <li>3. A continuación, introduzca la función correspondiente en este archivo en la página para usar</li>
            <li>4. Dicha configuración permite a todos usar su propia interfaz en el proceso de desarrollo inicial, y luego reemplazar directamente la interfaz real después de que la interfaz se escribe en el back-end en la etapa posterior.</li>
            <li>5. Si desea trabajar de forma independiente para su currículum, esta función es muy agradable, cada vez que reemplaza la interfaz de back-end y el contenido al lugar de datos virtuales simulados, incluso después de irse, su proyecto inicial también puede ejecutarse como un currículum o Nice.</li>
          </ul>
        </p>
        <p>
          <b>Usar datos simulados en línea</b>
        </p>
        <p>
          <ul>
            <li>1. Cree proyectos en cualquier plataforma simulada en línea y cree una interfaz simulada</li>
            <li>2. En vite.config.ts, defina un nuevo proxy, el nombre recomendado: "onlineMock", puede consultar el archivo dentro: server.proxy object internal writing, y luego agregar una nueva línea, puede ser una escritura similar, más información vaya al sitio web oficial de vite para encontrarlo.</li>
            <li>3. A continuación, escriba la llamada a la interfaz en: src/api/* y defina baseUrl como "/onlineMock", que puede referirse al archivo src/api/user.ts</li>
            <li>4. Finalmente, la función correspondiente en este archivo se puede introducir en la página </li>
            <li>5. El simulacro local utiliza el mecanismo de intercepción JS, hay solicitudes de interfaz durante el desarrollo local, no hay solicitudes de interfaz cuando se usa en línea y los eventos JS se interceptan.</li>
          </ul>
        </p>
        <h2 style="margin-top: 40px;">Cómo usar la interfaz de backend real</h2>
        <p>Al usar una interfaz, primero debe eliminar el baseUrl de la interfaz correspondiente en la carpeta API, y puede eliminarlo directamente</p>
        <p>
          <b>Usar un proxy</b>
        </p>
        <p>
          <ul>
            <li>1. Al depurar localmente, debe prestar atención a si la dirección correspondiente al proxy configurado en vite.config.ts es normal, y puede usar Postman para probar si la interfaz está disponible</li>
            <li>2. Al escribir la interfaz en la carpeta src/api, debe separar la cadena del proxy de la cadena real, como: http://vue-admin-box.51weblove.com/api/table/list, al escribir el proxy, debe proxy: 'http://vue-admin-box.51weblove.com/api' a 'api', Luego, en la interfaz, solo escriba la ruta como: 'tabla / lista'.</li>
            <li>3. Una vez configurado el proxy, verá la interfaz en las herramientas de desarrollo: el nombre de dominio final es el nombre de dominio de su proyecto actual, como: http://localhost:3000/api/table/list, no lo dude, de hecho, se accede a él: http://vue-admin-box.51weblove.com/api/table/list</li>
            <li>4. Se recomienda que use un proxy, para que el front-end no tenga problemas entre dominios, y el back-end no tenga que lidiar con un montón de cosas, hola hola a todos, deje que el back-end coopere con usted también es más genial.</li>
            <li>5. Al conectarse, también debe configurar el servidor correspondiente, por ejemplo, Nginx debe configurar los ajustes del proxy y configurar el prefijo de interfaz que desea proxy, de modo que se pueda acceder normalmente al proyecto real en la línea.</li>
            <li>6. Si está buscando un rendimiento extremo, no use un proxy, ya que también hará que su servidor actúe como un agente de interfaz. Pero en mi propio uso habitual, debido a que la frecuencia de uso en segundo plano es en realidad mucho menor que la de la página principal, estoy usando principalmente un proxy.</li>
          </ul>
        </p>
        <p>
          <b>Usar la dirección de la interfaz directamente</b>
        </p>
        <p>
          <ul>
            <li>1. Preste atención a los tres archivos en el directorio raíz del proyecto primero： .env.development, .env.production, .env.staging Archivos, correspondientes al entorno de desarrollo, el entorno de producción y el entorno de prueba</li>
            <li>2. Deberá modificar la variable VITE_BASE_URL en los tres archivos para reemplazarla con el prefijo de dirección de la interfaz real</li>
            <li>3. En este momento, inicie el acceso al proyecto y encontrará que la solicitud de interfaz se convierte en la solicitud de interfaz real que necesita.</li>
          </ul>
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .layout-container {
    article {
      padding: 0 20px;
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
        font-size: 18px;
        padding-left: 30px;
      }
      ul {
        text-align: left;
        li {
          line-height: 30px;
        }
      }
    }
  }
</style>