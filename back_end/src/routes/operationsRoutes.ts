import express from 'express'
import * as operationServicies from '../servicies/operationServicies'
import toNewOperationEntry from '../utils'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const operations = await operationServicies.getEntriesWithoutSensitiveInfo()
    res.json(operations)
  } catch (error) {
    res.status(500).send('Error al obtener las operaciones')
  }
})

router.post('/', async (req, res) => {
  try {
    const newOperationEntry = toNewOperationEntry(req.body)

    const addOperationEntry = await operationServicies.addOperation(newOperationEntry)

    res.json(addOperationEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message })
    }
  }
})

export default router
