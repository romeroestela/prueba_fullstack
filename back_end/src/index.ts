import express from 'express'
import operationsRouter from './routes/operationsRoutes'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/operations', (_req, res) => {
  console.log('¡Se han encontrado operaciones!')
  res.send('operation')
})

app.use('/api/operations', operationsRouter)

app.listen(PORT, () => {
  console.log(`El servidor esta en ejecución en el puerto ${PORT}`)
})
