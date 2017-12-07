import { Router } from 'express'
import { check, validationResult } from 'express-validator/check'
import { checkValidation, checkShared } from 'src/utils/validation'
import * as Provider from 'src/providers/cities'

export const router = Router();

router
    .get('/search/:lang/:query', [
        checkShared('lang'),
        check('query')
            .exists()
            .trim()
            .isLength({ min: 2 })
    ],
    checkValidation,
    async (req, res, next) => {
        const { query, lang } = req.params;
        const result = await Provider.search(query, lang);
        return res.json(result);
    });

router
    .get('/:lang/:id', [
        checkShared('lang'),
        check('id')
            .exists()
            .isNumeric()
    ],
    checkValidation,
    async (req, res, next) => {
        const { id, lang } = req.params;
        const result = await Provider.get(lang, id);
        return res.json(result);
    });
