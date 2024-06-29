import express from 'express'
//Importa la funcion connection que esta en db.js
import router from './routes/main.route.js'
import connection from './database/db.js'
import { constants } from './services/utils/constants.js'
import { not_found } from './controllers/main.controller.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

//Llamado de la funcion Connection
await connection()

app.use('/api', router)

app.get('*', not_found)

app.listen(port, () => console.log(`Server on port:${port}`))
