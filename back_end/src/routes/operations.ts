import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('Devolviendo todas las operaciones')
})

router.post('/', (_req, res) => {
    res.send('Agregando nuevas operaciones')
})

export default router