import { Router, Request, Response } from 'express'
import { getLogger } from 'src/utils/log'
import { getBundle } from 'src/utils/bundles'

const log = getLogger(module);

export const router = Router();

router
    .get('/',
    (req: Request, res: Response) => {
        res.render('index', getBundle());
    });
