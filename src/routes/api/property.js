var router = require('express').Router();
var PropertyController =  require('../../controller/propertyController.js')
 
router.post("/",PropertyController.addProperty)
router.get("/",PropertyController.getAllProperties)
router.put("/id", PropertyController.updateProperty)
router.delete("/", PropertyController.deleteProperty)
router.get("/id",PropertyController.getSingleProperty)
router.get("/user",PropertyController.getAllProperties)
router.get("/company",PropertyController.getAllPropertyCompanies)

module.exports = router;