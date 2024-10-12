import { Request, Response, NextFunction } from 'express';
import opportunityService from '../services/opportunityService';
import { opportunitySchema } from '../validations/opportunityValidation';

export const createOpportunity = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { error } = opportunitySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const opportunity = await opportunityService.createOpportunity(req.body);
    return res.status(201).json({ message: 'Opportunity created successfully', data: opportunity });
  } catch (error) {
    return next(error); // Pass the error to the next middleware
  }
};
