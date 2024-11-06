# Prueba Técnica para Desarrollador Full Stack #

## Descripción
Aplicación full-stack para listar y agregar operaciones de comercializadoras. Creada como prueba técnica para Desarrollador Full Stack Junior.

## Tecnologías Utilizadas
- Front-end : React + TypeScript
- Back-end: Node + TypeScript
- Base de Datos: PostgreSQL

## Tareas  

### Front-end (React + TypeScript)
- [x] Configurar proyecto de React con TypeScript.
- [x] Crear interfaz de usuario:
   - [x] Formulario para añadir operaciones.
   - [x] Lista para mostrar las operaciones existentes.
- [ ] Conectar con el back-end usando fetch o Axios.
- [ ] (Opcional) Implementar React Query para gestión de estado y cache de datos.

### Back-end (Node.js + TypeScript)
- [x] Configurar proyecto de Node.js con TypeScript y Express/Fastify.
- [x] Crear rutas API:
   - [x] `GET /operations`: Devuelve todas las operaciones.
   - [x] `POST /operations`: Permite agregar una nueva operación.
- [ ] Conectar con PostgreSQL usando un ORM (TypeORM).
   - [ ] Crear las funciones para consultar y modificar la base de datos.

### Base de Datos (PostgreSQL)
- [ ] Diseñar el esquema de la base de datos:
   - [ ] Crear tabla `marketers` (comercializadoras).
   - [ ] Crear tabla `operations`.
- [ ] Probar la conexión y las consultas básicas.

### Documentación y Entrega
- [ ] Completar la documentación en el README.md (instrucciones para ejecutar el proyecto, decisiones tomadas).
- [ ] Realizar pruebas finales de la aplicación.
- [ ] Subir los cambios finales al repositorio y preparar para entrega.

### Notas 
Asegúrate de priorizar la funcionalidad básica antes de implementar características opcionales.

## Instalación y Despligue
He utilizado Vite para la intalación de React + Typescript. Las opciones elegidas han sido:
Framework: REACT 
Variante: TypeScript + SWC

## Configuración proyecto Node + TypeScript
He hecho cambios en el archivo `package.json`. 
He añadido la siguiente línea en la sección de `scripts`:

"scripts": {
   "tsc": "tsc",
}

Este script permite compilar los archivos TypeScript a JavaScript

### Tipos para Express
Al utilizar Express en TypeScript, Visual Studio Code o el complicador TypeScript mostraban un error, idicando que no se encontraba la declaración de tipos para el módulo `express`. Esto sucede porque el paquete de Express no incluye sus propios tipos.

Para resolver esto, he utilizado un paquete de tipos creado por la comunidad: `@types/express`. Visual Studio Code sugiere instalarlo, y lo he intalado con el siguiente comando:

   npm install @types/express -D

### Scripts del Proyecto
He configurado el siguiente script en el archivo `package.json`:

"scripts": {
   "start": "node build/index.js"
}

Este script permite iniciar la aplicación ejecutando el archivo `build/index.js`, que es la versión transformada del archivo principal (index.ts) en  un formato que Node.js entiende. Al correr `npm start`, se lanza la aplicación usando este archivo listo para producción, que se guarda en la carpera `build`.

Para facilitar el desarrollo, he instalado `ts-node-dev`como dependencia de desarrollo:
`ts-node-dev` es una herramientaque permite ejecutar el código TypeScript directamente sin necesidad de compilarlo manualmente cada vez que hacemos un cambio. También detecta automáticamente los cambios en los archivos y reinicia el servidor, lo que hace que el flujo de desarrollo sea mñas rñapido y cómodo.

He agregado el script en el archivo package.json para ejecutar la aplicación en modo de desarrollo: 

"scripts": {
  "dev": "ts-node-dev src/index.ts"
}

Al correr `npm run dev`, la aplicación se ejecutará y recargará automáticamente cada vez que haya cambios en el código.

## Estructura del Proyecto Front-End
- Carpeta `components`: He creado la carpeta `components` para agrupar componentes reutilizables. Esto me ayuda a mantener el código más ordenado y fácil de manejar. Dentro de esta carpeta, tengo dos componentes: uno llamado `Form` para capturar nuesvas operaciones y otro llamado `Table` para mostrar esas operaciones.

## Estructura del Proyecto Back-End
-Carpeta `routes`: He creado la carpeta `routes` para organizar las rutas de la API y manejar las solicitudes que llegan al servidor de manera estructurada. El archivo `operationsRouter.ts` define las rutas relacionadas con las operaciones y cómo deben responder a solicitudes específicas de los clientes, como obtener o crear nuevas operaciones.

-Carpeta `services`: He creado una carpeta servicies para centralizar la lógica de negocio de la aplicación. Dentro de ella, el archivo `operationsServices.ts` contiene las funciones necesarias para manejar las operaciones, como añadir, validar y obtener datos de operaciones.

-Archivo `types.d.ts` en `src`: Este archivo contiene las definiciones de tipos TypeScript que utilizo en diferentes partes de la aplicacion. 

## Comentarios y Decisiones Front-End
- Elección de Vite: Decidí utilizar Vite por su rapidez en la configuración y en el desarrollo, lo que permite una mejor experiencia al trabajar con React y TypeScript.

- Uso de SWC: Elegí SWC como el compilador de TypeScript por su rendimiento superior en comparación con el compilador tradicional, lo que agiliza el proceso de desarrollo.

- Linter Front-End: Decidí no instalar ESLint manualmente, ya que Vite incluye el linter por defecto.

- Tipo de respuesta de la API: En el archivo `types.d.ts` he añadido un tipo llamado`OperationResponseFromApi`. Este tipo es una forma de definir cómo debería ser la respuesta que recibimos del backend. Esto ayuda a que TypeScript verifique que los datos son correctos, lo que evita errores y have que el código sea más seguro. 

## Comentarios y Decisiones Back-End
- Linter Back-End: He añadido un linter llamado `ts-standard`. Este linter ayuda a mantener un código limpio y consistente.

- Elección de servidor Express.js o Fastify
He decidido utilizar **Express.js** en lugar de **Fastify** para la implementación del servidor.
   
   Tengo una pequeña base con Node.js y Express.js, así que puedo avanzar más rápido en lugar de aprender una nueva tecnología desde cero.
   
### Consideraciones Futuras
**Fastify** ofrece características avanzadas como un rendimiento superior y un enfoque basado en promesas. Por eso, en el futuro me parece una buena opción aprenderlo.

- Definición del Tipo NonSensitiveInfoEntry
El tipo `NonSensitiveInfoEntry` es una manera de proteger información sensible en nuestra aplicación. He decidido no mostrar datos, como el `id`, el `marketer_id` y el `client_id`, en las respuestas que enviamos desde la API. Esto nos ayuda a mantener la privacidad de dichos datos.

TypeScript no puede inferir por sí mismo qué datos debemos mostrar o esconder. Por eso, tenemos que decirle de manera manual qué información queremos que aparezca. Utilizaremos en la funcion `getEntriesWithoutSensitiveInfo` del fichero `operationServicies.ts` el método map para crear un nuevo array que solo incluya los campos que queremos mostrar.

- Definición del Tipo `newOperationEntry`
Para facilitar la creación de nuevas operaciones sin repetir tanto código, he añadido un nuevo tipo `newOperationEntry`, que es una versión simplificada de las operaciones originales. Este tipo excluye campos como el `id`, `marketer_name` y `client_name` porque estos se generan o asignan automáticamente.

- Mejoras y Organización del Código.
Para solucionar un problema que me ha surgido en producción con los tipos de datos, he creado el archivo `utils.ts`, donde he añadido funciones que validan los datos que recibe el servidor antes de procesarlos. Este archivo permite asegurar que los datos cumplen con los tipos y formatos esperados, evitando errores en la aplicación.

Las validaciones incluyen: 

`isString`: Comprueba que el valor es una cadena. Aunque por ahora solo la uso una vez, esta función facilita la escalabilidaad, por si más adelante se necesita en otros lugares del código.

`isNumber`: Verifica que el valor es un número y no un ´NaN´. Esto nos asegura que las entradas numéricas sean válidades, sin repetir lógica en varios sitios. 

`isType`: Asegura que el valor de `Type` solo sea `buy` o `sell`. Para manejar mejor estos valores he creado un `enum` llamado `Type`en vez de usar un tipo simple.

Este último cambio me generó un problema en producción. Inicialmente, había definido `Type` como `enum` dentro del fihero `types.d.ts`, que es un archivo de definiciones `(.d.ts)`. Por esa razón al incluir un `enum`, que requiere una representación en tiempo de ejecucición, surgierón errores de compilación. 

Para solucionar este problema, he movido el `enum` a un fichero independiente (`enums.ts`) y he exportado `Type` desde allí. 

- Solución al problema de CORS
Al intentar conectar el frontend con el backend, me ha surgido un error de CORS(Cross-Origin Resource Sharing). Este error se debe a que, por motivos de seguridad, losn avegadores limitan las solicitudes hachas desde un dominio diferente al que sirve la aplicación. Para solucionarlo, he añadido una configuración en el backend que permite el acceso desde cualquier origen. 

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

## Comentarios y Decisiones BASE DE DATOS
- He utilizado el tipo `SERIAL` para la columna `id` para asegurar que cada operación tenga un identificador único e incremental automáticamente. Este tipo facilita la gestión de los IDs sin tener que asignarlos mmanualmente.

## Decisiones de Diseño
- Lista de operaciones existentes: Decidí mostrar las operaciones en una tabla en lugar de una lista para mejorar la claridad y poder visulizar mejor cada campo. 
