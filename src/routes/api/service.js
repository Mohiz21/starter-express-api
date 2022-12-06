var router = require('express').Router();
var ServiceController =  require('../../controller/serviceController.js')
 
router.post("/",ServiceController.addService)
router.get("/",ServiceController.getAllServices)
router.put("/id", ServiceController.updateService)
router.delete("/", ServiceController.deleteService)
router.get("/id",ServiceController.getSingleService)
router.get("/user",ServiceController.getAllServices)

module.exports = router;