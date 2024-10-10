// /src/features/activities/index.ts
import { Router } from 'express';
import { logActivity } from './controllers/activityController';
import { activitySchema } from './validations/activityValidation';
import validate from './validations/validate'

const router = Router();

router.post('/', validate(activitySchema), logActivity);

export default router;
