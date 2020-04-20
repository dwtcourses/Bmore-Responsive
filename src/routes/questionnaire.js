import { Router } from 'express';
import utils from '../utils';

const router = new Router();
router.use(utils.authMiddleware)

// Creates a new questionnaire.
router.post('/', async (req, res) => {
    let code;
    let message;
    try {
        /*if (req.body.name !== undefined) {
            const { name, phone, email, UserId, EntityId } = req.body;

            // Validating emails
            if (email) {
                const goodEmail = await utils.validateEmails(email);
                if (!goodEmail) return utils.response(res, 422);
            }

            const contact = await req.context.models.Contact.create({ name, email, phone, UserId, EntityId });

            code = 200;
            message = contact.id + ' created';
        } else {
            code = 422;
        }*/
    } catch (e) {
        console.error(e);
        code = 500;
    }

    return utils.response(res, code, message);
});

// Gets a questionnaire.
router.get('/:questionnaire_id', async (req, res) => {
    let code;
    let message;
    try {
        /*const contacts = await req.context.models.Contact.findAll({
        });

        code = 200;
        message = {
            _meta: {
                total: contacts.length
            },
            results: contacts
        };*/
    } catch (e) {
        console.error(e);
        code = 500;
    }

    return utils.response(res, code, message);
});

export default router;
