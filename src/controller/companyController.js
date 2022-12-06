const CompanyService = require("../services/company");

exports.addCompany = async (req, res, next) => {
  try {
    const { body } = req;
    let company = await CompanyService.getCompany({companylicense:body.companylicense});
    if(company)
      return next({ message: "License Already Registered", status: 422 });

    const Company = CompanyService.newCompany(body);

    await Company.save();

    return res.status(200).json({
      success: true,
      data: Company,
      message: "Company Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllCompanies = async (req, res, next) => {
  try {
    const query={};

    if(req.query.userid){
      query.userid = req.query.userid;
    }
    if(req.query.isBusinessProperty){
      query.isBusinessProperty = req.query.isBusinessProperty;
    }
    if(req.query.isJobsCompany){
      query.isJobsCompany = req.query.isJobsCompany;
    }
    const Companies = await CompanyService.getCompanies(query);
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

exports.getSingleCompany = async (req, res, next) => {
  try {
    const Company = await CompanyService.getCompany({ _id: req.query.id });
    console.log(Company);
    if (!Company)
      return next({
        success: false,
        data: {},
        message: "Company Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Company,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateCompany = async (req, res, next) => {
  try {
    const Company = await CompanyService.updateCompany({ _id: req.query.id }, req.body);
    if (!Company)
      return next({
        success: false,
        data: {},
        message: "Company Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Company,
      },
      message: "Company Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteCompany = async (req, res, next) => {
  try {
    const Company = await CompanyService.deleteCompany(
      { _id: req.query.id }
    );
    if (!Company)
      return next({
        success: false,
        data: {},
        message: "Company Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Company,
      },
      message: "Company Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
