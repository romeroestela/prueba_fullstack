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
- [ ] Crear interfaz de usuario:
   - [ ] Formulario para añadir operaciones.
   - [ ] Lista para mostrar las operaciones existentes.
- [ ] Conectar con el back-end usando fetch o Axios.
- [ ] (Opcional) Implementar React Query para gestión de estado y cache de datos.

### Back-end (Node.js + TypeScript)
- [ ] Configurar proyecto de Node.js con TypeScript y Express/Fastify.
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

### Comentarios y Decisiones 
    **Elección de Vite:** Decidí utilizar Vite por su rapidez en la configuración y en el desarrollo, lo que permite una mejor experiencia al trabajar con React y TypeScript.

    **Uso de SWC:** Elegí SWC como el compilador de TypeScript por su rendimiento superior en comparación con el compilador tradicional, lo que agiliza el proceso de desarrollo.