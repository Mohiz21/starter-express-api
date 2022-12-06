const AdminService = require("../services/Admins");
const { AdminsModel } = require("../models");
const AdminPass = new AdminsModel();

exports.addAdmin = async (req, res, next) => {
  try {
    const { body } = req;
    let Admin = await AdminService.getAdmin({email:body.email});
    if(Admin)
      return next({ message: "Email Already Registered", status: 422 });

    const Admins = AdminService.newAdmin(body);
    const password = await AdminPass.genrateHash(body.password);
    Admins.password = password;

    await Admins.save();

    return res.status(200).json({
      success: true,
      data: Admin,
      message: "Admin Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllAdmins = async (req, res, next) => {
  try {
    const query={
      
    };
    const Admins = await AdminService.getAdmins(query);
    return res.status(200).json({
      success: true,
      data: {
        Admins,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleAdmin = async (req, res, next) => {
  try {
    const Admin = await AdminService.getAdmin({ _id: req.query.id });
    console.log(Admin);
    if (!Admin)
      return next({
        success: false,
        data: {},
        message: "Admin Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Admin,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.loginAdmin = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const password = await AdminPass.genrateHash(body.password);
    const Admin = await AdminService.getAdmin({ 
      password: password,
      $or: [
        { "phonenumber": body.emailorphone },
        { "email": body.emailorphone  },
      ]
    });
    console.log(Admin);
    if (!Admin)
      return next({
        success: false,
        data: {},
        message: "Admin Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Admin,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
}

exports.updateAdmin = async (req, res, next) => {
  try {
    const Admin = await AdminService.updateAdmin({ _id: req.query.id }, req.body);
    if (!Admin)
      return next({
        success: false,
        data: {},
        message: "Admin Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Admin,
      },
      message: "Admin Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteAdmin = async (req, res, next) => {
  try {
    const Admin = await AdminService.deleteAdmin(
      { _id: req.query.id }
    );
    if (!Admin)
      return next({
        success: false,
        data: {},
        message: "Admin Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Admin,
      },
      message: "Admin Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
