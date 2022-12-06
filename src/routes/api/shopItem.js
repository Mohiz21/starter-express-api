var router = require('express').Router();
var ShopItemController =  require('../../controller/shopItemController.js')
 
router.post("/",ShopItemController.addShopItem)
router.get("/",ShopItemController.getAllShopItems)
router.put("/id", ShopItemController.updateShopItem)
router.delete("/", ShopItemController.deleteShopItem)
router.get("/id",ShopItemController.getSingleShopItem)
router.get("/shop",ShopItemController.getAllShopItems)

module.exports = router;