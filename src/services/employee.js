const { EmployeeModel, UsersModel } = require("../models");

class EmployeeService {
  newEmployee(request) {
    return new EmployeeModel(request);
  }

  getEmployee(req) {
    return UsersModel.findOne(req);
  }

  filterEmployee(req) {
    console.log('req', req)
    return EmployeeModel.find(req).populate({
      path: 'category',
      select: 'name'
    }).populate({
        path: 'subCategory',
        select: 'name'
    }).populate({
      path: 'userid',
    })
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
