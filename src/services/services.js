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

  filterService(req) {
    return ServiceModel.find(req).populate({
      path: 'category',
      select: 'name'
    }).populate({
      path: 'subCategory',
      select: 'name'
  })
  }

  getServices(req) {
    return ServiceModel.find(req);
  }

  deleteService(req) {
    return ServiceModel.findOneAndDelete(req);
  }
}

module.exports = new ServicesService();
