import mongoose, { Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description?: string;
}

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  }
}, { timestamps: true });

export default mongoose.model<IProject>('Project', ProjectSchema);