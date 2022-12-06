const { ShopItemModel } = require("../models");

class ShopItemService {
  newShopItem(request) {
    return new ShopItemModel(request);
  }

  getSingleShopItem(req) {
    return ShopItemModel.findOne(req);
  }

  updateShopItem(req, data) {
    return ShopItemModel.findOneAndUpdate(req, data, { new: true });
  }

  getAllShopItems(req) {
    return ShopItemModel.find(req);
  }

  deleteShopItem(req) {
    return ShopItemModel.findOneAndDelete(req);
  }
}

module.exports = new ShopItemService();
