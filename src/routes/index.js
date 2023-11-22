import { Router } from 'express'
import { getTest, postTest } from '../controllers/testController.js'
const route = Router()

route.post('/test', postTest)
route.get('/test', getTest)

export default route