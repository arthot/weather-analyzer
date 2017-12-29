import { Router } from 'express'
import nocache = require('nocache')
import { router as home } from 'src/controllers/home'

export const routes = Router();

routes.use(nocache(), home);
