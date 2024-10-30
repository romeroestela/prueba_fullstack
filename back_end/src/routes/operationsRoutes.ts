import express from 'express'
import * as operationServicies from '../servicies/operationServicies'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(operationServicies.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Agregar una nueva operación')
})

export default router
