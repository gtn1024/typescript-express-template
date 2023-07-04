import express from 'express'
import { test } from './test.controller'
import { root } from './root.controller'

const router = express.Router()

router.get('/', root)
router.get('/test', test)

export { router }
