import mongoose, { Document, Schema } from 'mongoose';

export interface IOpportunity extends Document {
  leadId: string;
  projectName: string;
  expectedCloseDate: Date;
  projectValue: number;
  stage: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const OpportunitySchema = new Schema<IOpportunity>({
  leadId: { type: String, required: true },
  projectName: { type: String, required: true },
  expectedCloseDate: { type: Date, required: true },
  projectValue: { type: Number, required: true },
  stage: { type: String, required: true, enum: ['Bid', 'Negotiation', 'Closed', 'Lost'] },
}, { timestamps: true });

export default mongoose.model<IOpportunity>('Opportunity', OpportunitySchema);
