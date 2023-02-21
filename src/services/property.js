const { PropertyAdsModel } = require("../models");

class PropertyService {
  newProperty(request) {
    return new PropertyAdsModel(request);
  }

  getProperty(req) {
    return PropertyAdsModel.findOne(req);
  }

  updateProperty(req, data) {
    return PropertyAdsModel.findOneAndUpdate(req, data, { new: true });
  }

  getProperties(req) {
    return PropertyAdsModel.find(req);
  }

  filterProperty(req) {
    return PropertyAdsModel.find(req).populate({
      path: 'category',
      select: 'name'
    })
  }

  getComapanyProperties(req){
    return PropertyAdsModel.find(req);
  }

  deleteProperty(req) {
    return PropertyAdsModel.findOneAndDelete(req);
  }
}

module.exports = new PropertyService();
