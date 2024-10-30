import express from 'express'

import operationsRouter from './routes/operations'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/operations', (_req, res) => {
    console.log('¡Se han encontrado operaciones!')
    res.send('operation')
})

app.use('/api/operations', operationsRouter)

app.listen(PORT, () => {
    console.log(`El servidor esta en ejecución en el puerto ${PORT}`)
})