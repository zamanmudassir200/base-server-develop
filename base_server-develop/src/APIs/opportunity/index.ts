import { Router } from 'express';
import { createOpportunity } from './controllers/opportunityController';

const router = Router();

router.post('/', createOpportunity);

export default router;
