import { Router } from 'express'
import { router as cities } from 'src/controllers/cities'

export const routes = Router();

routes.use('/cities', cities);
