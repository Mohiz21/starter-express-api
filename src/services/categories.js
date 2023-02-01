const { CategoriesModel } = require("../models");

class CategoryService {
  newCategory(request) {
    return new CategoriesModel(request);
  }

  getCategory(req) {
    return CategoriesModel.findOne(req);
  }

  updateCategory(req, data) {
    return CategoriesModel.findOneAndUpdate(req, data, { new: true });
  }

  getCategories(req) {
    return CategoriesModel.find(req.query);
  }

  deleteCategory(req) {
    return CategoriesModel.findOneAndDelete(req);
  }
}

module.exports = new CategoryService();
