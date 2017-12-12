import { Router } from 'express'
import { check, validationResult } from 'express-validator/check'
import { checkValidation } from 'src/utils/validation'
import * as Provider from 'src/providers/days'

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
        const { cityId, month } = req.params;
        const result = await Provider.get(cityId, month);
        return res.json(result);
    });
