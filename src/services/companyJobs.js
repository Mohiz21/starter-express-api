const { JobsModel } = require("../models");

class JobService {
  newJob(request) {
    return new JobsModel(request);
  }

  getJob(req) {
    return JobsModel.findOne(req);
  }

  filterJob(req) {
    return JobsModel.find(req).populate({
      path: 'category',
      select: 'name'
    }).populate({
      path: 'subCategory',
      select: 'name'
  })
  }

  updateJob(req, data) {
    return JobsModel.findOneAndUpdate(req, data, { new: true });
  }

  getJobs(req) {
    return JobsModel.find(req);
  }

  deleteJob(req) {
    return JobsModel.findOneAndDelete(req);
  }
}

module.exports = new JobService();
