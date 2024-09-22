import { Router } from 'express';
import questionnaireRouter from './questionnaire';

/**
 * App router
 *
 * @type {*}
 */
const appRouter = Router();

appRouter.use('/questionnaire', questionnaireRouter);

export default appRouter;
