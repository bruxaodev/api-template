import express from 'express'
import cors from 'cors'
import { config as dotenv } from 'dotenv'
import errors from 'express-async-errors'

import ConnectMongo from './src/db/mongo.js'
import routes from './src/routes/index.js'

dotenv()
const { PORT } = process.env
const server = express()

server.use(cors({
    origin: '*'
}))

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use((req, res, next) => {
    console.log(`-- ${req.method} ${req.originalUrl}`);
    next();
});


server.use(routes)

server.on('mongo', () => {
    server.listen(PORT, console.log('Servidor rodando na porta:', PORT))
})

ConnectMongo().then(() => {
    server.emit('mongo')
})