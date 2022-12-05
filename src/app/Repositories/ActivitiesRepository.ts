import { Activity } from '../models/Activity';

interface Params {
  message?: string,
  status?: number,
  isDeletable?: boolean
  id?: string
}

class ActivitiesRepository {
  async findAll() {
    const response = await Activity.find();
    return response;
  }

  async createActivity({message, status, isDeletable}: Params) {
    const activity = await Activity.create({message, status, isDeletable});
    return activity;
  }

  async update({status, id}: Params) {
    const activity = await Activity.findByIdAndUpdate(id, {status});
    return activity;
  }

  async delete(id: string) {
    const activity = await Activity.findByIdAndDelete(id);
    return activity;
  }
}

export default new ActivitiesRepository();
