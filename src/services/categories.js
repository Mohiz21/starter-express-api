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
    console.log(req, 'req');
    return CategoriesModel.find(req);
  }

  deleteCategory(req) {
    return CategoriesModel.findOneAndDelete(req);
  }
}

module.exports = new CategoryService();
