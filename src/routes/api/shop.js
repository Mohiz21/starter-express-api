var router = require('express').Router();
var ShopController =  require('../../controller/shopController.js')
 
router.post("/",ShopController.addShop)
router.get("/",ShopController.getAllShops)
router.put("/id", ShopController.updateShop)
router.delete("/", ShopController.deleteShop)
router.get("/id",ShopController.getSingleShop)
router.get("/user",ShopController.getAllShops)

module.exports = router;