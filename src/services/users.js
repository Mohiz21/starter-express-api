const { UsersModel } = require("../models");

class UserService {
  newUser(request) {
    return new UsersModel(request);
  }

  getUser(req) {
    return UsersModel.findOne(req);
  }

  updateUser(req, data) {
    return UsersModel.findOneAndUpdate(req, data, { new: true });
  }

  getUsers(req) {
    return UsersModel.find(req);
  }

  deleteUser(req) {
    return UsersModel.findOneAndDelete(req);
  }
}

module.exports = new UserService();
