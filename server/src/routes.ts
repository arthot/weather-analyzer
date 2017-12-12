import { Router } from 'express'
import { router as cities } from 'src/controllers/cities'
import { router as weather } from 'src/controllers/weather'

export const routes = Router();

routes.use('/cities', cities);
routes.use('/weather', weather);
