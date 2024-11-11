import express from 'express'
import * as operationServicies from '../servicies/operationServicies'
import toNewOperationEntry from '../utils'

const router = express.Router()

// Ruta para obtener todas las operaciones
router.get('/', async (_req, res) => {
  try {
    const operations = await operationServicies.getEntriesWithoutSensitiveInfo()
    res.json(operations) // Envía las operaciones como respuesta en formato JSON
  } catch (error) {
    res.status(500).send('Error al obtener las operaciones') // Muesta menaje de error si la respuesta falla
  }
})

// Ruta para añadir una nueva operación
router.post('/', async (req, res) => {
  try {
    // Convierte y valida los datos de la solicitud
    const newOperationEntry = toNewOperationEntry(req.body)

    // Añade la operación a la base de datos
    const addOperationEntry = await operationServicies.addOperation(newOperationEntry)

    res.json(addOperationEntry) // Envía la nueva operación como respuesta
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message }) // Muestra mensaje si hay un error de validación 
    }
  }
})

export default router
