import type { Request, Response } from 'express'
import express from 'express'
import { test } from './controller/test.controller'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})
router.get('/test', test)

export { router }
