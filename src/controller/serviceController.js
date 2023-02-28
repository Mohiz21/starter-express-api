const ServiceService = require("../services/services");

exports.addService = async (req, res, next) => {
  try {
    const { body } = req;
    const Service = ServiceService.newService(body);

    await Service.save();

    return res.status(200).json({
      success: true,
      data: Service,
      message: "Service Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllServices = async (req, res, next) => {
  try {
    const Services = await ServiceService.getServices(req.query);
    return res.status(200).json({
      success: true,
      data: {
        Services,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleService = async (req, res, next) => {
  try {
    const Service = await ServiceService.getService({ _id: req.query.id });
    console.log(Service);
    if (!Service)
      return next({
        success: false,
        data: {},
        message: "Service Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Service,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateService = async (req, res, next) => {
  try {
    const Service = await ServiceService.updateService({ _id: req.query.id }, req.body);
    if (!Service)
      return next({
        success: false,
        data: {},
        message: "Service Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Service,
      },
      message: "Service Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteService = async (req, res, next) => {
  try {
    const Service = await ServiceService.deleteService(
      { _id: req.query.id }
    );
    if (!Service)
      return next({
        success: false,
        data: {},
        message: "Service Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Service,
      },
      message: "Service Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.filterServiceByCategory = async (req, res, next) => {
  try {
    query = {}
    if(req.query.category) query.category = req.query.category
    if(req.query.subCategory) query.subCategory = req.query.subCategory
    const job = await ServiceService.filterService(req.query);
    console.log(job);
    if (!job)
      return next({
        success: false,
        data: {},
        message: "Service Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        job,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};