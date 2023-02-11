var router = require('express').Router();
var TransportVehicleController =  require('../../controller/transportVehicleController.js')
 
router.post("/",TransportVehicleController.addTransportVehicle)
router.get("/",TransportVehicleController.getAllTransportVehicles)
router.put("/id", TransportVehicleController.updateTransportVehicle)
router.delete("/", TransportVehicleController.deleteTransportVehicle)
router.get("/id",TransportVehicleController.getSingleTransportVehicle)
router.get("/user",TransportVehicleController.getAllTransportVehicles)

module.exports = router;