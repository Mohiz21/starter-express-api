var router = require('express').Router();
var SellVehicleController =  require('../../controller/sellVehicleController.js')
 
router.post("/",SellVehicleController.addSellVehicle)
router.get("/",SellVehicleController.getAllSellVehicles)
router.put("/id", SellVehicleController.updateSellVehicle)
router.delete("/", SellVehicleController.deleteSellVehicle)
router.get("/id",SellVehicleController.getSingleSellVehicle)
router.get("/user",SellVehicleController.getAllSellVehicles)

module.exports = router;