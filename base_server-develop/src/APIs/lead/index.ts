import { Router } from 'express';
import { createLead, deleteLead, getLeadById, getLeads, updateLead } from './controllers/leadController';
import validateLead from './validations/validateLead';

const router = Router();

// post
router.post('/', validateLead, createLead);
// get
router.get("/",getLeads)
// get lead by id
router.get("/:id",getLeadById)
// // put
router.patch("/:id",updateLead)
//  delete
router.delete("/:id",deleteLead)


export default router;
