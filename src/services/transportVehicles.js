const { TransportVehicleModel } = require("../models");

class TransportVehicleService {
  newTransportVehicle(request) {
    return new TransportVehicleModel(request);
  }

  getTransportVehicle(req) {
    return TransportVehicleModel.findOne(req);
  }

  updateTransportVehicle(req, data) {
    return TransportVehicleModel.findOneAndUpdate(req, data, { new: true });
  }

  getTransportVehicles(req) {
    return TransportVehicleModel.find(req);
  }

  deleteTransportVehicle(req) {
    return TransportVehicleModel.findOneAndDelete(req);
  }
}

module.exports = new TransportVehicleService();
