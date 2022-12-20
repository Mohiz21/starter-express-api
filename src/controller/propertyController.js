const PropertyService = require("../services/property");

exports.addProperty = async (req, res, next) => {
  try {
    const { body } = req;
    const Property = PropertyService.newProperty(body);

    await Property.save();

    return res.status(200).json({
      success: true,
      data: Property,
      message: "Property Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllProperties = async (req, res, next) => {
  try {
    const Companies = await PropertyService.getProperties(req.query);
    return res.status(200).json({
      success: true,
      data: {
        Companies,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getAllPropertyCompanies = async (req, res, next) => {
  try {
    const Companies = await PropertyService.getComapanyProperties(req.query);
    return res.status(200).json({
      success: true,
      data: {
        Companies,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleProperty = async (req, res, next) => {
  try {
    const Property = await PropertyService.getProperty({ _id: req.query.id });
    console.log(Property);
    if (!Property)
      return next({
        success: false,
        data: {},
        message: "Property Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Property,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateProperty = async (req, res, next) => {
  try {
    const Property = await PropertyService.updateProperty({ _id: req.query.id }, req.body);
    if (!Property)
      return next({
        success: false,
        data: {},
        message: "Property Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Property,
      },
      message: "Property Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteProperty = async (req, res, next) => {
  try {
    const Property = await PropertyService.deleteProperty(
      { _id: req.query.id }
    );
    if (!Property)
      return next({
        success: false,
        data: {},
        message: "Property Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Property,
      },
      message: "Property Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
