const { JobsModel } = require("../models");

class JobService {
  newJob(request) {
    return new JobsModel(request);
  }

  getJob(req) {
    return JobsModel.findOne(req);
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
