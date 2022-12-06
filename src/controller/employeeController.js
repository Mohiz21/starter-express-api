const EmployeeService = require("../services/employee");

exports.addEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    let employee = await EmployeeService.getEmployee({jobtitle:body.jobtitle});
    if(employee)
      return next({ message: "job title Already exists", status: 422 });

    const Employee = EmployeeService.newEmployee(body);

    await Employee.save();

    return res.status(200).json({
      success: true,
      data: Employee,
      message: "Employee Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllEmployees = async (req, res, next) => {
  try {
    const query={
        
    };

    if(req.query.userid){
      query.userid = req.query.userid;
    }
    const Employees = await EmployeeService.getCompanies(query);
    return res.status(200).json({
      success: true,
      data: {
        Employees,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleEmployee = async (req, res, next) => {
  try {
    const Employee = await EmployeeService.getEmployee({ _id: req.query.id });
    console.log(Employee);
    if (!Employee)
      return next({
        success: false,
        data: {},
        message: "Employee Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Employee,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const Employee = await EmployeeService.updateEmployee({ _id: req.query.id }, req.body);
    if (!Employee)
      return next({
        success: false,
        data: {},
        message: "Employee Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Employee,
      },
      message: "Employee Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteEmployee = async (req, res, next) => {
  try {
    const Employee = await EmployeeService.deleteEmployee(
      { _id: req.query.id }
    );
    if (!Employee)
      return next({
        success: false,
        data: {},
        message: "Employee Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Employee,
      },
      message: "Employee Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};