var router = require('express').Router();
var CompanyController =  require('../../controller/companyController.js')
 
router.post("/",CompanyController.addCompany)
router.get("/",CompanyController.getAllCompanies)
router.put("/id", CompanyController.updateCompany)
router.delete("/", CompanyController.deleteCompany)
router.get("/id",CompanyController.getSingleCompany)
router.get("/user",CompanyController.getAllCompanies)

module.exports = router;