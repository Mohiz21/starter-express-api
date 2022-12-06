const { ShopModel } = require("../models");

class ShopService {
  newShop(request) {
    return new ShopModel(request);
  }

  getShop(req) {
    return ShopModel.findOne(req);
  }

  updateShop(req, data) {
    return ShopModel.findOneAndUpdate(req, data, { new: true });
  }

  getShops(req) {
    return ShopModel.find(req);
  }

  deleteShop(req) {
    return ShopModel.findOneAndDelete(req);
  }
}

module.exports = new ShopService();
