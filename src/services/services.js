const { ServiceModel } = require("../models");

class ServicesService {
  newService(request) {
    return new ServiceModel(request);
  }

  getService(req) {
    return ServiceModel.findOne(req);
  }

  updateService(req, data) {
    return ServiceModel.findOneAndUpdate(req, data, { new: true });
  }

  getServices(req) {
    return ServiceModel.find(req);
  }

  deleteService(req) {
    return ServiceModel.findOneAndDelete(req);
  }
}

module.exports = new ServicesService();
