import express from 'express'
import * as operationServicies from '../servicies/operationServicies'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(operationServicies.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  const { marketer_id, client_id, type, amount, price } = req.body

  const newOperationEntry = operationServicies.addOperation({
    marketer_id,
    client_id,
    type,
    amount,
    price
  })

  res.json(newOperationEntry)
})

export default router
