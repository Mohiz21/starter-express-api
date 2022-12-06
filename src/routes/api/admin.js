var router = require('express').Router();
var AdminController =  require('../../controller/adminController')
 
router.post("/",AdminController.addAdmin)
router.post("/login", AdminController.loginAdmin)
router.get("/",AdminController.getAllAdmins)
router.put("/id", AdminController.updateAdmin)
router.delete("/", AdminController.deleteAdmin)
router.get("/id",AdminController.getSingleAdmin)

module.exports = router;
