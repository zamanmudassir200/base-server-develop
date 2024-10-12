import Joi from 'joi';

export const opportunitySchema = Joi.object({
  leadId: Joi.string().required(),
  projectName: Joi.string().required(),
  expectedCloseDate: Joi.date().required(),
  projectValue: Joi.number().positive().required(),
  stage: Joi.string().valid('Bid', 'Negotiation', 'Closed', 'Lost').required(),
});
