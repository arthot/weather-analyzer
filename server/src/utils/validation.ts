import { check, validationResult } from 'express-validator/check'

export function checkValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    } else {
        next();
    }
}

export function checkShared(field: 'lang') {
    switch (field) {
        case 'lang':
            return check('lang')
                .exists()
                .isLength({ min: 2, max: 5 });
    }
}
