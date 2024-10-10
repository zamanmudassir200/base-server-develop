import leadRepository from '../repositories/leadRepository';
import Lead from '../models/leadModel'; // Import the Lead model
import { ILead } from '../models/leadModel';

const createLead = async (leadData: ILead) => {
  // Check if a lead with the same email already exists
  const existingLead = await Lead.findOne({ email: leadData.email });
  if (existingLead) {
    throw new Error('Email already in use. Please use a different email address.');
  }

  // Proceed to create the new lead
  return await leadRepository.createLead(leadData);
};
// Get all leads
const getAllLeads = async (): Promise<ILead[]> => {
  return await leadRepository.getAllLeads();
};

// Get a lead by ID
const getLeadById = async (id: string): Promise<ILead | null> => {
  return await leadRepository.getLeadById(id);
};

// Update a lead
const updateLead = async (id: string, leadData: Partial<ILead>): Promise<ILead | null> => {
  return await leadRepository.updateLead(id, leadData);
};

// Delete a lead
const deleteLead = async (id: string): Promise<ILead | null> => {
  return await leadRepository.deleteLead(id);
};

export default {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead
};