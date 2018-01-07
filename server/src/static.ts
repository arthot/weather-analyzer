import { Router } from 'express'
import nocache = require('nocache')
import { router as home } from 'src/controllers/home'
import { detectLocale } from 'src/utils/locale'

export const routes = Router();

routes.use('/:lang([a-z]{2})/:city-:id(\d+)', nocache(), home);
routes.use('/:lang([a-z]{2})', nocache(), home);

routes.use(nocache(), (req, res) => {
    res.redirect('/' + detectLocale(req));
});
