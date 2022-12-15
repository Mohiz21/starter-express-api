const JobsService = require("../services/companyJobs");

exports.addJob = async (req, res, next) => {
  try {
    const { body } = req;
    const Job = JobsService.newJob(body);

    await Job.save();

    return res.status(200).json({
      success: true,
      data: Job,
      message: "job Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllJobs = async (req, res, next) => {
  try {
    const query={
      
    };
    if(req.query.companyId){
      query.companyId = req.query.companyId;
    }
    const Jobs = await JobsService.getJobs(query);
    return res.status(200).json({
      success: true,
      data: {
        Jobs,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleJob = async (req, res, next) => {
  try {
    const job = await JobsService.getJob({ _id: req.query.id });
    console.log(job);
    if (!job)
      return next({
        success: false,
        data: {},
        message: "job Not found",
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

exports.filterJobByCategory = async (req, res, next) => {
  try {
    query = {}
    if(req.query.category) query.category = req.query.category
    if(req.query.subCategory) query.subCategory = req.query.subCategory
    const job = await JobsService.filterJob(query);
    console.log(job);
    if (!job)
      return next({
        success: false,
        data: {},
        message: "job Not found",
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

exports.updateJob = async (req, res, next) => {
  try {
    const job = await JobsService.updateJob({ _id: req.query.id }, req.body);
    if (!job)
      return next({
        success: false,
        data: {},
        message: "job Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        job,
      },
      message: "job Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await JobsService.deleteJob(
      { _id: req.query.id }
    );
    if (!job)
      return next({
        success: false,
        data: {},
        message: "job Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        job,
      },
      message: "job Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
