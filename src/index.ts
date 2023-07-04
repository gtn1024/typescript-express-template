import express from 'express'
import { router } from './routes'

const app = express()

app.use(router)

app.listen(4090, () => globalThis.console.log('Server is running on port 4090'))
