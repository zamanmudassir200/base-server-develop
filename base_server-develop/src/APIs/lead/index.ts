import { Router } from 'express';
import { createLead, deleteLead, getLeadById, getLeads,qualifyLead,convertLeadToOpportunity } from './controllers/leadController';
import validateLead from './validations/validateLead';

const router = Router();

// post
router.post('/', validateLead, createLead);
// get
router.get("/",getLeads)
// get lead by id
router.get("/:id",getLeadById)
// // put
// router.patch("/:id",updateLead)
//  delete
router.delete("/:id",deleteLead)

router.patch('/:id', qualifyLead); // For updating lead status to "Qualified"
router.post('/:id/convert', convertLeadToOpportunity); // For converting to an opportunity

export default router;
