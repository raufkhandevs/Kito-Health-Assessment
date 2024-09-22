import { Router } from 'express';
import { QuestionnaireController } from '@/controllers';

/**
 * Questionnaire router
 *
 * @type {*}
 */
const questionnaireRouter = Router();

questionnaireRouter.get('/', QuestionnaireController.index);
questionnaireRouter.post('/', QuestionnaireController.create);
questionnaireRouter.get('/:id', QuestionnaireController.show);

export default questionnaireRouter;
