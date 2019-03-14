import { Router } from 'express'
import { check, validationResult } from 'express-validator/check'
import { checkValidation } from 'src/utils/validation'
import * as Provider from 'src/providers/days'
import { getLogger } from 'src/utils/log'

const log = getLogger(module);

export const router = Router();

router
    .get('/:cityId/:month', [
        check('cityId')
            .exists()
            .isNumeric(),
        check('month')
            .exists()
            .isNumeric()
    ],
        checkValidation,
        async (req, res, next) => {
            try {
                const { cityId, month } = req.params;
                log.debug('get weather for ', cityId, month);
                const result = await Provider.get(cityId, month);
                return res.json(result);
            } catch (e) {
                next(e);
            }
        });
