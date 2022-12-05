import { Schema, model } from 'mongoose';

export const Activity = model('Activity', new Schema({
  message: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  isDeletable: {
    type: Boolean,
    required: true
  }
}));
