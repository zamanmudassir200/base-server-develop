// /src/features/activities/controllers/activityController.ts
import { Request, Response } from 'express';
import Activity from '../models/activityModel';

export const logActivity = async (req: Request, res: Response) => {
  const { leadId, activityType, description, dateTime, assignedSalesRep } = req.body;

  const newActivity = new Activity({
    leadId,
    activityType,
    description,
    dateTime,
    assignedSalesRep,
  });

  try { 
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: 'Failed to log activity.' });
  }
};
