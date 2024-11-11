import express from 'express'
import operationsRouter from './routes/operationsRoutes'
import { AppDataSource } from './data-source'

const app = express()
const PORT = 3000

// Conecta la conexión a la BD antes de iniciar el servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Conectado a la base de datos')
    app.use(express.json()) // Configura express para interpretar JSON en las solicitudes

    // Configura las cabeceras para permitir solicitudes desde cualquier origen (CORS)
    app.use((_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*') // Permitir acceso desde cualquier dominio. No es seguro, pero es útil para esta situación.  
      res.header('Access-Control-Allow-Headers', 'Content-Type') // Permitir cabecera de tipo JSON
      res.header('Access-Control-Allow-Methods', 'GET, POST') // Métodos HTTP permitidos
      next()
    })

    // Define la ruta para las operaciones de la API
    app.use('/api/operations', operationsRouter)

    // Inicia el servidor solo después de conectar con éxito a la BD
    app.listen(PORT, () => {
      console.log(`El servidor está en ejecución en el puerto ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error)
  })
