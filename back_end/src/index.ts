import express from 'express'
import operationsRouter from './routes/operationsRoutes'

const app = express()
const PORT = 3000

app.use(express.json())

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/api/operations', operationsRouter)

app.listen(PORT, () => {
  console.log(`El servidor esta en ejecución en el puerto ${PORT}`)
})
