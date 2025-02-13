const Categories = require("../services/categories");
const { CategoriesModel } = require("../models");
const CategoryPass = new CategoriesModel();

exports.addCategory = async (req, res, next) => {
  try {
    const { body } = req;
    let Category = await Categories.getCategory({name:body.name});
    if(Category)
      return next({ message: "Category Already Registered", status: 422 });

    const Categorys = Categories.newCategory(body);
    await Categorys.save();

    return res.status(200).json({
      success: true,
      data: Categorys,
      message: "Category Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllCategories = async (req, res, next) => {
  try {
    const query={
      
    };
    const Categorys = await Categories.getCategories(query);
    return res.status(200).json({
      success: true,
      data: {
        Categorys,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleCategory = async (req, res, next) => {
  try {
    const Category = await Categories.getCategory({ _id: req.query.id });
    console.log(Category);
    if (!Category)
      return next({
        success: false,
        data: {},
        message: "Category Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Category,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getCategoryByType = async (req, res, next) => {
    try {
      let query = req.query
      if(req.query.parentCategory) {
        const regex = new RegExp('a-z', 'i')
        query.parentCategory = {"$exists" : true, "$ne" : ""}
      }
      console.log('query', query);
      const Category = await Categories.getCategories( query );
      if (!Category)
        return next({
          success: false,
          data: {},
          message: "Category Not found",
          status: 404,
        });
      return res.status(200).json({
        success: true,
        data: {
          Category,
        },
        message: "ok",
        status: 200,
      });
    } catch (error) {
      return next(error);
    }
};

exports.getCategoryByConsumer = async (req, res, next) => {
  try {
    let query = req.query;
    console.log('query', query);
    const Category = await Categories.getCategories( query );
    if (!Category)
      return next({
        success: false,
        data: {},
        message: "Category Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Category,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const Category = await Categories.updateCategory({ _id: req.query.id }, req.body);
    if (!Category)
      return next({
        success: false,
        data: {},
        message: "Category Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Category,
      },
      message: "Category Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const Category = await Categories.deleteCategory(
      { _id: req.query.id }
    );
    if (!Category)
      return next({
        success: false,
        data: {},
        message: "Category Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Category,
      },
      message: "Category Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
