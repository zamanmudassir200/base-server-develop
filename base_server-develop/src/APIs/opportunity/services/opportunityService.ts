import Opportunity from '../models/opportunityModel';
import { IOpportunity } from '../models/opportunityModel';

const createOpportunity = async (opportunityData: IOpportunity) => {
  const opportunity = new Opportunity(opportunityData);
  return await opportunity.save();
};

export default {
  createOpportunity
};
