import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'

const app = express()

//taperar la ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
//ruta donde va a ir indexado las paginas
app.use(indexRoutes)
//ruta para el css
app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'images')))
//server
app.listen(4000)
console.log('Server corriendo en puerto', 4000)
