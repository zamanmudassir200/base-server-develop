// /src/features/activities/services/activityService.ts
import Activity from '../models/activityModel';

export const createActivity = async (activityData: any) => {
  const activity = new Activity(activityData);
  return await activity.save();
};

// You can add other service methods as needed (e.g., findActivity, updateActivity)
