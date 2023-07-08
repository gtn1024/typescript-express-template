import express from 'express'
import { router } from './controller'

const app = express()

app.use(express.json())

app.use(router)

app.listen(4090, () => globalThis.console.log('Server is running on port 4090'))
