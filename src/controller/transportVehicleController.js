const TransportVehicleService = require("../services/transportVehicles.js");

exports.addTransportVehicle = async (req, res, next) => {
  try {
    const { body } = req;
    const TransportVehicle = TransportVehicleService.newTransportVehicle(body);

    await TransportVehicle.save();

    return res.status(200).json({
      success: true,
      data: TransportVehicle,
      message: "Transport Vehicle Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllTransportVehicles = async (req, res, next) => {
  try {
    const TransportVehicles = await TransportVehicleService.getTransportVehicles(req.query);
    return res.status(200).json({
      success: true,
      data: {
        TransportVehicles,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleTransportVehicle = async (req, res, next) => {
  try {
    const TransportVehicle = await TransportVehicleService.getTransportVehicle({ _id: req.query.id });
    console.log(TransportVehicle);
    if (!TransportVehicle)
      return next({
        success: false,
        data: {},
        message: "TransportVehicle Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        TransportVehicle,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateTransportVehicle = async (req, res, next) => {
  try {
    const TransportVehicle = await TransportVehicleService.updateTransportVehicle({ _id: req.query.id }, req.body);
    if (!TransportVehicle)
      return next({
        success: false,
        data: {},
        message: "TransportVehicle Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        TransportVehicle,
      },
      message: "TransportVehicle Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteTransportVehicle = async (req, res, next) => {
  try {
    const TransportVehicle = await TransportVehicleService.deleteTransportVehicle(
      { _id: req.query.id }
    );
    if (!TransportVehicle)
      return next({
        success: false,
        data: {},
        message: "TransportVehicle Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        TransportVehicle,
      },
      message: "TransportVehicle Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
