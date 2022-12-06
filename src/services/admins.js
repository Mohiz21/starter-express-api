const { AdminsModel } = require("../models");

class AdminService {
  newAdmin(request) {
    return new AdminsModel(request);
  }

  getAdmin(req) {
    return AdminsModel.findOne(req);
  }

  updateAdmin(req, data) {
    return AdminsModel.findOneAndUpdate(req, data, { new: true });
  }

  getAdmins(req) {
    return AdminsModel.find(req);
  }

  deleteAdmin(req) {
    return AdminsModel.findOneAndDelete(req);
  }
}

module.exports = new AdminService();
