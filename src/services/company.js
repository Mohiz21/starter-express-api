const { CompanysModel } = require("../models");

class CompanyService {
  newCompany(request) {
    return new CompanysModel(request);
  }

  getCompany(req) {
    return CompanysModel.findOne(req);
  }

  updateCompany(req, data) {
    return CompanysModel.findOneAndUpdate(req, data, { new: true });
  }

  getCompanies(req) {
    return CompanysModel.find(req);
  }

  deleteCompany(req) {
    return CompanysModel.findOneAndDelete(req);
  }
}

module.exports = new CompanyService();
