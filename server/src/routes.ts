import { Router } from 'express'
import nocache = require('nocache')
import { router as cities } from 'src/controllers/cities'
import { router as weather } from 'src/controllers/weather'

export const routes = Router();

routes.use('/cities', nocache(), cities);
routes.use('/weather', nocache(), weather);
