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
- [ ] Crear rutas API:
   - [ ] `GET /operations`: Devuelve todas las operaciones.
   - [ ] `POST /operations`: Permite agregar una nueva operación.
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

### Instalación y Despligue
   He utilizado Vite para la intalación de React + Typescript. Las opciones elegidas han sido:
   Framework: REACT 
   Variante: TypeScript + SWC

### Configuración proyecto Node + TypeScript
   - Cambios en el archivo package.json. 
   He añadido la siguiente línea en la sección de `scripts`:
   
   "scripts": {
      "tsc": "tsc",
   },

   Este script permite compilar los archivos TypeScript a JavaScript

## Estructura del Proyecto Front-End

## Estructura del Proyecto Back-End

## Comentarios y Decisiones 
   - Elección de Vite: Decidí utilizar Vite por su rapidez en la configuración y en el desarrollo, lo que permite una mejor experiencia al trabajar con React y TypeScript.

   - Uso de SWC: Elegí SWC como el compilador de TypeScript por su rendimiento superior en comparación con el compilador tradicional, lo que agiliza el proceso de desarrollo.

   - Linter: Decidí no instalar ESLint manualmente, ya que Vite incluye el linter por defecto.

   - Elección de servidor Express.js o Fastify
   He decidido utilizar **Express.js** en lugar de **Fastify** para la implementación del servidor.
   
      Tengo una pequeña base con Node.js y Express.js, así que puedo avanzar más rápido en lugar de aprender una nueva tecnología desde cero.

   ### Consideraciones Futuras
   **Fastify** ofrece características avanzadas como un rendimiento superior y un enfoque basado en promesas. Por eso, en el futuro me parece una buena opción aprenderlo.
   
## Decisiones de Diseño
   - Lista de operaciones existentes: Decidí mostrar las operaciones en una tabla en lugar de una lista para mejorar la claridad y poder visulizar mejor cada campo. 
