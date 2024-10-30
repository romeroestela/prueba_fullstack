import express from 'express'
import operationsData from '../operations.json'

const router = express.Router()

router.get('/', (_req, res) => {
    res.json(operationsData)
})

router.post('/', (_req, res) => {
    res.send('Agregar una nueva operación')
})

export default router