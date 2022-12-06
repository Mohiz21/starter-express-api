const ShopService = require("../services/shop");

exports.addShop = async (req, res, next) => {
  try {
    const { body } = req;
    let shop = await ShopService.getShop({shopname:body.shopname});
    if(shop)
      return next({ message: "shopname Already Registered", status: 422 });

    const Shop = ShopService.newShop(body);

    await Shop.save();

    return res.status(200).json({
      success: true,
      data: Shop,
      message: "Shop Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllShops = async (req, res, next) => {
  try {
    const query={
        
    };

    if(req.query.userid){
      query.userid = req.query.userid;
    }
    const Shops = await ShopService.getShops(query);
    return res.status(200).json({
      success: true,
      data: {
        Shops,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleShop = async (req, res, next) => {
  try {
    const Shop = await ShopService.getShop({ _id: req.query.id });
    console.log(Shop);
    if (!Shop)
      return next({
        success: false,
        data: {},
        message: "Shop Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Shop,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateShop = async (req, res, next) => {
  try {
    const Shop = await ShopService.updateShop({ _id: req.query.id }, req.body);
    if (!Shop)
      return next({
        success: false,
        data: {},
        message: "Shop Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        Shop,
      },
      message: "Shop Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteShop = async (req, res, next) => {
  try {
    const Shop = await ShopService.deleteShop(
      { _id: req.query.id }
    );
    if (!Shop)
      return next({
        success: false,
        data: {},
        message: "Shop Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        Shop,
      },
      message: "Shop Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
