import express from 'express'
import operationsRouter from './routes/operationsRoutes'
import { AppDataSource } from './data-source';

const app = express()
const PORT = 3000

// Modificación: Inicializa la conexión a la BD antes de iniciar el servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Conectado a la base de datos');
    app.use(express.json());

    app.use((_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      next();
    });

    app.use('/api/operations', operationsRouter);

    // Inicia el servidor solo después de conectar con éxito a la BD
    app.listen(PORT, () => {
      console.log(`El servidor está en ejecución en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });