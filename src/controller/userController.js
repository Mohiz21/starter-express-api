const UserService = require("../services/users");
const { UsersModel } = require("../models");
const userPass = new UsersModel();

exports.addUser = async (req, res, next) => {
  try {
    const { body } = req;
    let user = await UserService.getUser({email:body.email});
    if(user)
      return next({ message: "Email Already Registered", status: 422 });

    const User = UserService.newUser(body);
    const password = await userPass.genrateHash(body.password);
    User.password = password;

    await User.save();

    return res.status(200).json({
      success: true,
      data: User,
      message: "User Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const query={
      
    };
    const Users = await UserService.getUsers(query);
    return res.status(200).json({
      success: true,
      data: {
        Users,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const User = await UserService.getUser({ _id: req.query.id });
    console.log(User);
    if (!User)
      return next({
        success: false,
        data: {},
        message: "User Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        User,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const password = await userPass.genrateHash(body.password);
    const User = await UserService.getUser({ 
      password: password,
      $or: [
        { "phonenumber": body.emailorphone },
        { "email": body.emailorphone  },
      ]
    });
    console.log(User);
    if (!User)
      return next({
        success: false,
        data: {},
        message: "User Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        User,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const User = await UserService.updateUser({ _id: req.query.id }, req.body);
    if (!User)
      return next({
        success: false,
        data: {},
        message: "User Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        User,
      },
      message: "User Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const User = await UserService.deleteUser(
      { _id: req.query.id }
    );
    if (!User)
      return next({
        success: false,
        data: {},
        message: "User Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        User,
      },
      message: "User Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
