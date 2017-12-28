import { Router, Request, Response } from 'express'
import nocache = require('nocache')
import { getBundle } from 'src/utils/bundles'

export const routes = Router();

const renderPage = (req: Request, res: Response) => {
    res.render('index', getBundle());
}

routes.get('/', renderPage);
