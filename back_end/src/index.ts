import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/operations', (req, res) => {
    console.log('¡Se han encontrado operaciones!')
    res.send('operation')
})

app.listen(PORT, () => {
    console.log(`El servidor esta en ejecución en el puerto ${PORT}`)
})