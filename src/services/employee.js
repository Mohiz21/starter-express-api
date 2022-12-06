const { EmployeeModel } = require("../models");

class EmployeeService {
  newEmployee(request) {
    return new EmployeeModel(request);
  }

  getEmployee(req) {
    return EmployeeModel.findOne(req);
  }

  updateEmployee(req, data) {
    return EmployeeModel.findOneAndUpdate(req, data, { new: true });
  }

  getCompanies(req) {
    return EmployeeModel.find(req);
  }

  deleteEmployee(req) {
    return EmployeeModel.findOneAndDelete(req);
  }
}

module.exports = new EmployeeService();
