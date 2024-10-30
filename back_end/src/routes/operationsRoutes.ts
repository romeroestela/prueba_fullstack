import express from 'express'
import operationsData from '../operations.json'

const router = express.Router()

router.get('/', (_req, res) => {
    res.json(operationsData)
})

router.post('/', (req, res) => {
    const newOperation = req.body
    operationsData.push(newOperation) //Simula agregar una nueva operación
    res.status(201).json(newOperation) //Envia la nueva operación como JSON con un código de estado 201 que indica que se ha creado correctamente.
})

export default router