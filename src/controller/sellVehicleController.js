const SellVehicleService = require("../services/sellVehicles.js");

exports.addSellVehicle = async (req, res, next) => {
  try {
    const { body } = req;

    const SellVehicle = SellVehicleService.newSellVehicle(body);

    await SellVehicle.save();

    return res.status(200).json({
      success: true,
      data: SellVehicle,
      message: "Sell Vehicle Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllSellVehicles = async (req, res, next) => {
  try {
    const SellVehicles = await SellVehicleService.getSellVehicles(req.query);
    return res.status(200).json({
      success: true,
      data: {
        SellVehicles,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleSellVehicle = async (req, res, next) => {
  try {
    const SellVehicle = await SellVehicleService.getSellVehicle({ _id: req.query.id });
    console.log(SellVehicle);
    if (!SellVehicle)
      return next({
        success: false,
        data: {},
        message: "SellVehicle Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        SellVehicle,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateSellVehicle = async (req, res, next) => {
  try {
    const SellVehicle = await SellVehicleService.updateSellVehicle({ _id: req.query.id }, req.body);
    if (!SellVehicle)
      return next({
        success: false,
        data: {},
        message: "SellVehicle Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        SellVehicle,
      },
      message: "SellVehicle Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteSellVehicle = async (req, res, next) => {
  try {
    const SellVehicle = await SellVehicleService.deleteSellVehicle(
      { _id: req.query.id }
    );
    if (!SellVehicle)
      return next({
        success: false,
        data: {},
        message: "SellVehicle Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        SellVehicle,
      },
      message: "SellVehicle Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
