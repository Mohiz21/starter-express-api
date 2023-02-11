const { SellVehicleModel } = require("../models");

class SellVehicleService {
  newSellVehicle(request) {
    return new SellVehicleModel(request);
  }

  getSellVehicle(req) {
    return SellVehicleModel.findOne(req);
  }

  updateSellVehicle(req, data) {
    return SellVehicleModel.findOneAndUpdate(req, data, { new: true });
  }

  getSellVehicles(req) {
    return SellVehicleModel.find(req);
  }

  deleteSellVehicle(req) {
    return SellVehicleModel.findOneAndDelete(req);
  }
}

module.exports = new SellVehicleService();
