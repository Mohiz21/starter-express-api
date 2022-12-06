const ShopItemService = require("../services/shopItems");

exports.addShopItem = async (req, res, next) => {
  try {
    const { body } = req;
    let shopItem = await ShopItemService.getSingleShopItem({itemname:body.itemname});
    if(shopItem)
      return next({ message: "shopItem Already Registered", status: 422 });

    const ShopItem = ShopItemService.newShopItem(body);

    await ShopItem.save();

    return res.status(200).json({
      success: true,
      data: ShopItem,
      message: "ShopItem Created Successfully",
      status: 200,
    });
  } catch (error) {
    error.code = 404;
    return next(error);
  }
};
exports.getAllShopItems = async (req, res, next) => {
  try {
    const query={
        
    };

    if(req.query.shopid){
      query.shopid = req.query.shopid;
    }
    const ShopItems = await ShopItemService.getAllShopItems(query);
    return res.status(200).json({
      success: true,
      data: {
        ShopItems,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleShopItem = async (req, res, next) => {
  try {
    const ShopItem = await ShopItemService.getSingleShopItem({ _id: req.query.id });
    console.log(ShopItem);
    if (!ShopItem)
      return next({
        success: false,
        data: {},
        message: "ShopItem Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        ShopItem,
      },
      message: "ok",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateShopItem = async (req, res, next) => {
  try {
    const ShopItem = await ShopItemService.updateShopItem({ _id: req.query.id }, req.body);
    if (!ShopItem)
      return next({
        success: false,
        data: {},
        message: "ShopItem Not found",
        status: 404,
      });
    return res.status(200).json({
      success: true,
      data: {
        ShopItem,
      },
      message: "ShopItem Updated Successfully",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
exports.deleteShopItem = async (req, res, next) => {
  try {
    const ShopItem = await ShopItemService.deleteShopItem(
      { _id: req.query.id }
    );
    if (!ShopItem)
      return next({
        success: false,
        data: {},
        message: "ShopItem Not found",
        status: 404,
      });

    return res.status(200).json({
      success: true,
      data: {
        ShopItem,
      },
      message: "ShopItem Deleted",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
};
